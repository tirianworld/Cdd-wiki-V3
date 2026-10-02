import React, { useState } from "react";

interface PersonajesSilhouettesBannerProps {
  className?: string;
  color?: string;
}

export function PersonajesSilhouettesBanner({
  className = "w-full min-h-[110px] sm:min-h-[140px] md:min-h-[170px]",
  color = "#232e33",
}: PersonajesSilhouettesBannerProps) {
  const [imgSrc, setImgSrc] = useState("/images/caldo_personajes_drawn_solid.png");

  return (
    <div
      className={`relative w-full overflow-hidden select-none flex items-end justify-center p-0 m-0 ${className}`}
    >
      {/* Ground Line neutral */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border/80 to-transparent pointer-events-none z-30" />

      {/* Characters silhouette (sin aura, al ras del suelo y sin márgenes laterales) */}
      <div className="relative z-10 flex items-end justify-center w-full h-full p-0 m-0">
        <img
          src={imgSrc}
          alt="Siluetas de Personajes de Caldo de Dragón"
          className="max-w-full max-h-full w-auto h-full self-end object-contain object-bottom select-none pointer-events-none transition-transform duration-300 origin-bottom group-hover:scale-[1.01] block m-0 p-0"
          style={{ objectPosition: "center bottom" }}
          onError={() => setImgSrc("/images/caldo_personajes_drawn_dark.png")}
        />
      </div>
    </div>
  );
}
