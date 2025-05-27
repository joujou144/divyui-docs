"use client";

import { usePathname } from "next/navigation";

export function useThemeColorChange() {
  const pathname = usePathname();
  const pageClass = pathname === "/" ? " home" : "other-pages";

  return { pathname, pageClass };
}
