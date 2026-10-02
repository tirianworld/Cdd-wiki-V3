import type { Request, Response } from "express";

export async function handleGetHunterMonsters(req: Request, res: Response) {
  try {
    res.json([]);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
}

export async function handleGetHunterMonsterById(req: Request, res: Response) {
  res.status(404).json({ error: "Monster not found" });
}

export async function handleSyncHunterMonsters(req: Request, res: Response) {
  res.json({ success: true, count: 0 });
}

export async function syncFromLiveHunterJournal() {
  return { success: true, synced: 0 };
}
