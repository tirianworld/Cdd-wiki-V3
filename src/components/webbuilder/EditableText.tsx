import React from "react";
import { useUIContent } from "../../context/UIContentContext";

interface EditableTextProps {
  textKey: string;
  defaultValue: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  children?: React.ReactNode;
}

export function EditableText({ textKey, defaultValue, as = "span", className = "", children }: EditableTextProps) {
  const { getText } = useUIContent();
  const text = getText(textKey, defaultValue);
  const Component = as as any;

  return (
    <Component className={className}>
      {children || text}
    </Component>
  );
}
