"use client";

import { cn, navMenu, useThemeColourChange } from "@/utils";
import Link from "next/link";
import { useState } from "react";
import { TransitionLink } from "../nav";
import { CloseIcon, MenuIcon } from "../svg";

export const Header = () => {
  const styleColor = useThemeColourChange();
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => setOpenMenu(!openMenu);

  return (
    <nav
      role="navigation"
      className={cn(styleColor)}
      suppressHydrationWarning={true}
    >
      <div className="flex justify-between items-center py-2 mx-6">
        {/* Home */}
        <div className={cn("flex items-center gap-4 nav-logo", styleColor)}>
          <Link href="/" className="monoton text-xl">
            Divy
          </Link>

          <span className={cn("nunito-light version-pill", styleColor)}>
            v.3.0
          </span>
        </div>

        {/* Menu */}
        <ul
          className={cn(
            "hidden lg:flex gap-6 nunito-regular capitalize",
            styleColor
          )}
        >
          {navMenu.map(({ id, href, name }) => (
            <li key={id}>
              <TransitionLink href={href}>{name}</TransitionLink>
            </li>
          ))}
        </ul>

        {/* Mobile nav */}
        <button className="lg:hidden cursor-pointer" onClick={handleOpenMenu}>
          {openMenu ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </nav>
  );
};
