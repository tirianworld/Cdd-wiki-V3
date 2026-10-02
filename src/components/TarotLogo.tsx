import React from "react";

export function TarotLogo({ className = "h-4 w-4 text-primary", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
      <polygon points="12 2.5 14.5 8.5 21 9 16 13.5 17.5 20 12 16.5 6.5 20 8 13.5 3 9 9.5 8.5 12 2.5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    </svg>
  );
}
