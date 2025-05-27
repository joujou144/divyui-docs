"use client";

import { useThemeColorChange } from "@/utils/hooks";

export const PageWrapper = ({ children }) => {
  const { pageClass } = useThemeColorChange();

  return (
    <div
      className={`body-background ${pageClass} transition-colors duration-300`}
    >
      {children}
    </div>
  );
};
