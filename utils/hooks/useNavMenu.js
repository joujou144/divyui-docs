"use client";

import { useState } from "react";

export function useNavMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => setOpenMenu(!openMenu);

  return {
    openMenu,
    setOpenMenu,
    handleOpenMenu,
  };
}
