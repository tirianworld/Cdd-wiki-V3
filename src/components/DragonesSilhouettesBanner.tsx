import React from "react";
import { Flame } from "lucide-react";

interface BannerProps {
  className?: string;
  color?: string;
}

export function DragonesSilhouettesBanner({ className = "w-full h-32", color = "#c8856e" }: BannerProps) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-secondary/40 via-card/60 to-secondary/40 border border-border/50 p-4 ${className}`}>
      <div className="absolute inset-0 bg-radial from-orange-500/10 via-transparent to-transparent opacity-60" />
      <div className="flex items-center gap-3 z-10 text-center">
        <Flame className="h-8 w-8 text-orange-400" />
        <div className="text-left">
          <h3 className="font-heading font-bold text-sm sm:text-base text-foreground uppercase tracking-wider">
            Dragones Celestiales y Primordiales
          </h3>
          <p className="text-[11px] text-muted-foreground font-light">
            Monarcas de las tormentas, señores de fuego y devoradores de eones.
          </p>
        </div>
      </div>
    </div>
  );
}
