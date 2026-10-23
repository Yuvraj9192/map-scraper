
const TAVILY_URL = "https://api.tavily.com/search";

async function searchTavily(query) {
  const apiKey = process.env.TAVILY_API_KEY;

  if (!apiKey) {
    throw new Error("TAVILY_API_KEY is missing from .env");
  }

  const response = await fetch(TAVILY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key: apiKey,
      query,
      search_depth: "basic",
      max_results: 5,
      include_answer: false,
      include_raw_content: false,
    }),
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Tavily search failed (${response.status}): ${errorText.slice(0, 300)}`
    );
  }

  const data = await response.json();

  return (data.results ?? [])
    .filter((item) => {
      try {
        const url = new URL(item.url);
        return ["http:", "https:"].includes(url.protocol);
      } catch {
        return false;
      }
    })
    .map((item) => ({
      title: item.title ?? "",
      url: item.url,
      content: (item.content ?? "").slice(0, 1500),
      score: item.score ?? null,
    }));
}

export async function searchBusinessWeb({ business }) {
  const name = business.name;
  const city = business.city ?? "";
  const category = business.category ?? business.searchedCategory ?? "";

  const queries = [
    `"${name}" ${city} official website services`,
    `${category} competitors in ${city}`,
  ].filter((query) => query.trim().length > 0);

  const results = await Promise.all(
    queries.map(async (query) => ({
      query,
      items: await searchTavily(query),
    }))
  );

  const seenUrls = new Set();
  const sources = [];

  for (const group of results) {
    for (const item of group.items) {
      if (seenUrls.has(item.url)) continue;

      seenUrls.add(item.url);
      sources.push({
        ...item,
        searchQuery: group.query,
      });
    }
  }

  return {
    queries,
    results: sources,
  };
}
