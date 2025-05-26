"use client";

import { cn, navMenu } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TransitionLink } from "../nav";

export const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <nav
      role="navigation"
      className={cn(
        "w-full py-4 border-b",
        isHome ? "text-violet-50" : "text-indigo-950",
        isHome ? "border-violet-200" : "border-slate-300"
      )}
    >
      <div className="flex justify-between items-center py-2 mx-6">
        {/* Home */}
        <div className>
          <Link href="/" className="monoton text-xl">
            Divy
          </Link>

          <span className="ml-4 nunito-light text-sm">v.3.0</span>
        </div>

        {/* Menu */}
        <ul className="hidden lg:flex gap-6 nunito-regular capitalize">
          {navMenu.map(({ id, href, name }) => (
            <li key={id}>
              <TransitionLink href={href}>{name}</TransitionLink>
            </li>
          ))}
        </ul>

        {/* Mobile nav */}
        <div className="lg:hidden">nav</div>
      </div>
    </nav>
  );
};
