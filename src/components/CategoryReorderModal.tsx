import React from "react";
import { X } from "lucide-react";

interface CategoryReorderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CategoryReorderModal({ isOpen, onClose }: CategoryReorderModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xs">
      <div className="bg-card border border-border rounded-xl shadow-2xl p-6 max-w-md w-full space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-heading font-bold text-base text-foreground">
            Reordenar Categorías
          </h3>
          <button type="button" onClick={onClose} className="p-1 rounded hover:bg-secondary text-muted-foreground">
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="text-xs text-muted-foreground">
          Ajusta el orden de visualización de las categorías en el menú lateral.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="w-full py-2 bg-primary text-primary-foreground font-semibold rounded-lg text-xs"
        >
          Guardar y Cerrar
        </button>
      </div>
    </div>
  );
}
