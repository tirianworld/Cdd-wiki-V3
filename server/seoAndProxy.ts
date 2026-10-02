import type { Request, Response } from "express";

export function resolveProxyDetails(req: any) {
  return { host: req.headers.host || "localhost", proto: "http" };
}

export function parseSlugAndFormat(url: string) {
  return { slug: "", format: "html" };
}

export function isBotOrCrawler(userAgent: string) {
  return false;
}

export function buildArticleMetadata(article: any) {
  return {};
}

export function renderArticleSsrBody(article: any) {
  return "";
}

export function injectArticleHtml(html: string, metadata: any, body: string) {
  return html;
}

export function generateRobotsTxt() {
  return "User-agent: *\nAllow: /\n";
}

export function generateSitemapXml(articles: any[]) {
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`;
}

export function generateLlmsTxt(articles: any[]) {
  return "";
}

export function generateLlmsFullTxt(articles: any[]) {
  return "";
}

export function htmlToMarkdown(html: string) {
  return html;
}
