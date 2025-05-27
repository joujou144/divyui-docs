"use client";

import { cn } from "@/utils";
import { useThemeColorChange } from "@/utils/hooks";
import Link from "next/link";
import { MobileNav, NavLinks } from "../nav";

export const Header = () => {
  const { pageClass } = useThemeColorChange();

  return (
    <nav role="navigation" className={cn(pageClass)}>
      <div className="flex justify-between items-center py-2 mx-6">
        {/* Home */}
        <div className={cn("flex items-center gap-4 nav-logo", pageClass)}>
          <Link href="/" className="monoton text-xl">
            Divy
          </Link>

          <span className={cn("nunito-light version-pill", pageClass)}>
            v.3.0
          </span>
        </div>

        {/* Menu */}
        <NavLinks />

        {/* Mobile nav */}
        <MobileNav />
      </div>
    </nav>
  );
};
