ALTER TABLE "GeneratedWebsite"
  ADD COLUMN IF NOT EXISTS "deploymentUrl" TEXT,
  ADD COLUMN IF NOT EXISTS "vercelDeploymentId" TEXT,
  ADD COLUMN IF NOT EXISTS "deploymentStatus" TEXT,
  ADD COLUMN IF NOT EXISTS "deployedAt" TIMESTAMP(3);