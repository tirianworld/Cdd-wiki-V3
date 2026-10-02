import React, { createContext, useContext, useState } from "react";

interface UIContentContextType {
  getText: (key: string, defaultVal: string) => string;
  updateText: (key: string, value: string) => void;
}

const UIContentContext = createContext<UIContentContextType>({
  getText: (_key, defaultVal) => defaultVal,
  updateText: () => {},
});

export function UIContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<Record<string, string>>(() => {
    try {
      const raw = localStorage.getItem("dragopedia_ui_content");
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  const getText = (key: string, defaultVal: string) => {
    return content[key] !== undefined ? content[key] : defaultVal;
  };

  const updateText = (key: string, value: string) => {
    setContent((prev) => {
      const next = { ...prev, [key]: value };
      try {
        localStorage.setItem("dragopedia_ui_content", JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  return (
    <UIContentContext.Provider value={{ getText, updateText }}>
      {children}
    </UIContentContext.Provider>
  );
}

export function useUIContent() {
  return useContext(UIContentContext);
}
