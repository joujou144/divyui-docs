"use client";

import { usePathname } from "next/navigation";

export function useThemeColourChange() {
  const pathname = usePathname();
  return pathname === "/" ? "home" : "other-pages";
}
