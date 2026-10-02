import type { Request, Response } from "express";
import fs from "fs";
import path from "path";

export async function handleGetSpellbookSpells(req: Request, res: Response) {
  try {
    const file = path.join(process.cwd(), "public/data/spellbook_spells.json");
    if (fs.existsSync(file)) {
      const data = JSON.parse(fs.readFileSync(file, "utf8"));
      return res.json(data);
    }
    res.json([]);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
}

export async function handleGetSpellbookSpellById(req: Request, res: Response) {
  res.status(404).json({ error: "Spell not found" });
}

export async function handleSyncSpellbookSpells(req: Request, res: Response) {
  res.json({ success: true, count: 0 });
}

export async function syncFromLiveSpellbook() {
  return { success: true, synced: 0 };
}
