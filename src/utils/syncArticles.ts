import { WikiArticle } from "../types";

let memoryArticlesCache: WikiArticle[] = [];

export function getCachedArticles(): WikiArticle[] {
  if (memoryArticlesCache.length > 0) return memoryArticlesCache;
  try {
    const raw = localStorage.getItem("dragopedia_articles_cache");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryArticlesCache = parsed;
        return parsed;
      }
    }
  } catch (e) {
    // ignore
  }
  return [];
}

export function getCachedArticleBySlugOrId(slugOrId: string): WikiArticle | null {
  const articles = getCachedArticles();
  return (
    articles.find(
      (a) =>
        a.slug === slugOrId ||
        a.id === slugOrId ||
        (a.title && a.title.toLowerCase() === slugOrId.toLowerCase())
    ) || null
  );
}

export function setCachedArticles(articles: WikiArticle[]) {
  memoryArticlesCache = articles;
  try {
    localStorage.setItem("dragopedia_articles_cache", JSON.stringify(articles));
  } catch (e) {
    // ignore
  }
}

export async function syncFetch(url: string, options?: RequestInit): Promise<Response> {
  const res = await fetch(url, options);
  if (res.ok && url.includes("/api/articles") && (!options || options.method === "GET" || !options.method)) {
    const clone = res.clone();
    clone.json().then((data) => {
      if (Array.isArray(data)) {
        setCachedArticles(data);
        window.dispatchEvent(new CustomEvent("wiki-articles-updated"));
      }
    }).catch(() => {});
  }
  return res;
}
