import type { Request, Response } from "express";

export async function handleSearchArtworks(req: Request, res: Response) {
  res.json({ artworks: [], total: 0 });
}
