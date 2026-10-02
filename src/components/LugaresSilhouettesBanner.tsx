import React from "react";
import { MapPin } from "lucide-react";

interface BannerProps {
  className?: string;
  color?: string;
}

export function LugaresSilhouettesBanner({ className = "w-full h-32", color = "#6ea8c8" }: BannerProps) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-secondary/40 via-card/60 to-secondary/40 border border-border/50 p-4 ${className}`}>
      <div className="absolute inset-0 bg-radial from-sky-500/10 via-transparent to-transparent opacity-60" />
      <div className="flex items-center gap-3 z-10 text-center">
        <MapPin className="h-8 w-8 text-sky-400" />
        <div className="text-left">
          <h3 className="font-heading font-bold text-sm sm:text-base text-foreground uppercase tracking-wider">
            Reinos, Ciudades y Planos Astrales
          </h3>
          <p className="text-[11px] text-muted-foreground font-light">
            Territorios místicos, ruinas antiguas y fortalezas inexpugnables.
          </p>
        </div>
      </div>
    </div>
  );
}
