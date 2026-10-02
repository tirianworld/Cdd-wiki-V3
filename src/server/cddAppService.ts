import type { Request, Response } from "express";

export const DEFAULT_ITCH_PAGE_URL = "https://itch.io";
export const DEFAULT_ITCH_EMBED_URL = "https://itch.io";

export function getCddAppManifest() {
  return { apps: [] };
}

export function saveCddAppManifest(manifest: any) {
  return true;
}

export function generateSampleDemoApp() {}

export function installCddAppZip(zipBuffer: Buffer) {
  return { success: true };
}

export async function handleSaveUploadChunk(req: Request, res: Response) {
  res.json({ success: true });
}

export function deleteCddApp(appId: string) {
  return true;
}

export function handleServeAppFile(req: Request, res: Response) {
  res.status(404).send("Not found");
}

export function resolveItchEmbedUrl(url: string) {
  return url || DEFAULT_ITCH_EMBED_URL;
}
