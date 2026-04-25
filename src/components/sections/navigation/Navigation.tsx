"use client";

import React from "react";
import { Menubar } from "@/components/sections/navigation/Menubar";
import { Icon } from "@/components/common/icons/Icon";
import { ICON_SIZE } from "@/components/common/icons/constants";

export const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 sticky top-0 z-50">
      <Icon name="union" size={ICON_SIZE.LARGE} />
      <Menubar />
    </nav>
  );
};
