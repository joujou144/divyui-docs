"use client";

import { cn, navMenu } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "../svg";

export const Header = () => {
  const pathname = usePathname();
  const pageClass = pathname === "/" ? "home" : "other-pages";
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => setOpenMenu(!openMenu);

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
        <ul
          className={cn(
            "hidden lg:flex gap-6 nunito-regular capitalize",
            pageClass
          )}
        >
          {navMenu.map(({ id, href, name }) => {
            const isActive = pathname === href;
            return (
              <li key={id}>
                <Link
                  href={href}
                  className={cn("transition-link py-1", {
                    active: isActive,
                  })}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile nav */}
        <button className="lg:hidden cursor-pointer" onClick={handleOpenMenu}>
          {openMenu ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </nav>
  );
};
