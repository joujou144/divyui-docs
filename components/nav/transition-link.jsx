"use client";

import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const TransitionLink = ({ href, className, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn("transition-link py-1", className, {
        active: isActive,
      })}
    >
      {children}
    </Link>
  );
};
