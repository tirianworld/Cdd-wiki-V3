import React from "react";
import { useVisualEditor } from "../context/VisualEditorContext";
import { Sliders } from "lucide-react";

export function VisualEditorHUD() {
  const { isVisualEditMode, toggleVisualEditMode } = useVisualEditor();

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <button
        type="button"
        onClick={toggleVisualEditMode}
        className={`h-9 px-3 rounded-full text-xs font-medium flex items-center gap-2 shadow-lg transition-all ${
          isVisualEditMode
            ? "bg-primary text-primary-foreground ring-2 ring-primary/50"
            : "bg-card/90 text-muted-foreground hover:text-foreground border border-border"
        }`}
        title="Modo Edición Visual"
      >
        <Sliders className="h-3.5 w-3.5" />
        <span>{isVisualEditMode ? "Edición Activa" : "Editor"}</span>
      </button>
    </div>
  );
}
