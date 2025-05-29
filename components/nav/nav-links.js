import { cn, navMenu, useThemeColorChange } from "@/utils";
import Link from "next/link";

export const NavLinks = () => {
  const { pathname, pageClass } = useThemeColorChange();

  return (
    <ul
      className={cn(
        "hidden lg:flex gap-6 nunito-regular capitalize",
        pageClass
      )}
    >
      {navMenu.map(({ id, href, name }) => {
        const isActive =
          pathname === href ||
          (name === "components" && pathname.startsWith("/docs/components"));
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
  );
};
