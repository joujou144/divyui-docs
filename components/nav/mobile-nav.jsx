import { cn, navMenu, useNavMenu, useThemeColorChange } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { CloseIcon, MenuIcon } from "../svg";

export const MobileNav = () => {
  const { pageClass } = useThemeColorChange();
  const { openMenu, setOpenMenu, handleOpenMenu } = useNavMenu();

  return (
    <>
      <button
        className={cn("lg:hidden nav-button", pageClass)}
        onClick={handleOpenMenu}
      >
        {openMenu ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/** Mobile Nav Overlay */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-full z-20 bg-indigo-950 text-violet-50 p-6 shadow-lg lg:hidden"
          >
            <ul className="flex flex-col gap-6 mt-16">
              {navMenu.map(({ id, name, href }, index) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.2 }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpenMenu(false)}
                    className="text-lg capitalize"
                  >
                    {name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
