import crypto from "node:crypto";

const VERCEL_API = "https://api.vercel.com";

function getVercelConfig() {
  const token = process.env.VERCEL_TOKEN;

  if (!token) {
    throw new Error("VERCEL_TOKEN is missing from backend environment variables");
  }

  return { token };
}

function toBase64(content) {
  return Buffer.from(content, "utf8").toString("base64");
}

function slugify(value) {
  const slug = String(value || "business-website")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 35);

  return slug || "business-website";
}

async function vercelRequest(path, token, options = {}) {
  const response = await fetch(`${VERCEL_API}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message =
      data.error?.message ||
      data.message ||
      `Vercel API request failed (${response.status})`;

    throw new Error(message);
  }

  return data;
}

/**
 * Creates a Vercel preview deployment from the saved React/Vite source.
 * This does not overwrite a business's existing external website.
 */
export async function deployGeneratedWebsite({ website, business }) {
  if (!website || website.status !== "COMPLETED") {
    throw new Error("Only completed generated websites can be deployed");
  }

  if (!business?.name || !Array.isArray(website.files)) {
    throw new Error("Website source or business details are missing");
  }

  const { token } = getVercelConfig();

  const requiredFiles = [
    "package.json",
    "index.html",
    "src/main.jsx",
    "src/App.jsx",
    "src/index.css",
  ];

  const fileMap = new Map();

  for (const file of website.files) {
    if (
      !file ||
      typeof file.path !== "string" ||
      typeof file.content !== "string"
    ) {
      throw new Error("The saved website contains an invalid source file");
    }

    const path = file.path.replace(/^\/+/, "");

    if (!requiredFiles.includes(path)) {
      throw new Error(`Unsupported generated file: ${path}`);
    }

    if (fileMap.has(path)) {
      throw new Error(`Duplicate generated file: ${path}`);
    }

    fileMap.set(path, file.content);
  }

  const missingFiles = requiredFiles.filter((path) => !fileMap.has(path));

  if (missingFiles.length) {
    throw new Error(`Missing generated files: ${missingFiles.join(", ")}`);
  }

  let packageJson;

  try {
    packageJson = JSON.parse(fileMap.get("package.json"));
  } catch {
    throw new Error("Generated package.json is invalid JSON");
  }

  const dependencies = {
    ...packageJson.devDependencies,
    ...packageJson.dependencies,
  };

  if (!dependencies.react || !dependencies["react-dom"] || !dependencies.vite) {
    throw new Error("Generated package.json must include React, React DOM, and Vite");
  }

  const files = requiredFiles.map((file) => ({
    file,
    data: toBase64(fileMap.get(file)),
    encoding: "base64",
  }));

  const name = `${slugify(business.name)}-${website.id.slice(-6).toLowerCase()}`;

  const deployment = await vercelRequest(
    "/v13/deployments?skipAutoDetectionConfirmation=1",
    token,
    {
      method: "POST",
      body: JSON.stringify({
        name,
        target: "preview",
        files,
        projectSettings: {
          framework: "vite",
          buildCommand: "npm run build",
          installCommand: "npm install",
          outputDirectory: "dist",
        },
      }),
    }
  );

  return {
    id: deployment.id,
    url: deployment.url ? `https://${deployment.url}` : null,
    status: deployment.readyState || deployment.state || "BUILDING",
    createdAt: deployment.createdAt
      ? new Date(deployment.createdAt)
      : new Date(),
  };
}


export async function getVercelDeploymentStatus(deploymentId) {
  const token = process.env.VERCEL_TOKEN;

  if (!token) {
    throw new Error("VERCEL_TOKEN is missing from backend environment variables");
  }

  const response = await fetch(
    `https://api.vercel.com/v13/deployments/${encodeURIComponent(deploymentId)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.error?.message || "Unable to fetch deployment status from Vercel"
    );
  }

  return {
    id: data.id || data.uid || deploymentId,
    url: data.url ? `https://${data.url.replace(/^https?:\/\//, "")}` : null,
    status: data.readyState || data.state || data.status || "QUEUED",
    readyState: data.readyState || null,
    createdAt: data.createdAt || null,
    ready: data.ready || null,
    errorMessage: data.errorMessage || null,
  };
}
