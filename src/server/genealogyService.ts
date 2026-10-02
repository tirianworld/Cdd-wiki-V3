export async function readGenealogyFromStorage(articles?: any) {
  return { nodes: [], edges: [] };
}

export async function writeGenealogyToStorage(data: any) {
  return true;
}

export async function extractArticleRelationsWithAI(article: any, model?: any) {
  return [];
}

export function buildBaselineGenealogy(articles: any[]) {
  return { nodes: [], edges: [] };
}

export function reconcileGlobalGenealogy(tree: any, articles: any[]) {
  return tree || { nodes: [], edges: [] };
}

export function cleanRelationName(name: string) {
  return (name || "").trim();
}

export function generateNodeId(name: string) {
  return (name || "").toLowerCase().replace(/\s+/g, "_");
}

export function setGenealogyStorageDelegate(fn: any) {}

export function setGenealogyAiDelegate(fn: any) {}

export async function modifyGenealogyTreeWithAI(prompt: string, tree: any) {
  return tree;
}

export function safeParseJson(str: string, fallback?: any) {
  try {
    return JSON.parse(str);
  } catch {
    return fallback !== undefined ? fallback : null;
  }
}
