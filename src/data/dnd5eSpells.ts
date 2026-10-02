export interface Dnd5eSpell {
  index: string;
  name: string;
  level: number;
  school: { name: string };
  desc: string[];
}

export const DND_5E_SPELLS: Dnd5eSpell[] = [];
