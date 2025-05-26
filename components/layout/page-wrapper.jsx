"use client";

import { useThemeColourChange } from "@/utils/hooks";

export const PageWrapper = ({ children }) => {
  const backgroundClass = useThemeColourChange();

  return (
    <div
      className={`body-background ${backgroundClass} transition-colors duration-300`}
    >
      {children}
    </div>
  );
};
