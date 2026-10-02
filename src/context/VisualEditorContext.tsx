import React, { createContext, useContext, useState } from "react";

interface VisualEditorContextType {
  isVisualEditMode: boolean;
  setVisualEditMode: (val: boolean) => void;
  toggleVisualEditMode: () => void;
}

const VisualEditorContext = createContext<VisualEditorContextType>({
  isVisualEditMode: false,
  setVisualEditMode: () => {},
  toggleVisualEditMode: () => {},
});

export function VisualEditorProvider({ children }: { children: React.ReactNode }) {
  const [isVisualEditMode, setIsVisualEditMode] = useState(false);

  const toggleVisualEditMode = () => setIsVisualEditMode((prev) => !prev);

  return (
    <VisualEditorContext.Provider value={{ isVisualEditMode, setVisualEditMode: setIsVisualEditMode, toggleVisualEditMode }}>
      {children}
    </VisualEditorContext.Provider>
  );
}

export function useVisualEditor() {
  return useContext(VisualEditorContext);
}
