"use client";

import React from "react";
import { Menubar } from "@/components/navigation/Menubar";
import { Icon } from "@/components/icons/Icon";
import { ICON_SIZE } from "@/components/icons/constants";

export const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <Icon name="union" size={ICON_SIZE.LARGE} />
      <Menubar />
    </nav>
  );
};
