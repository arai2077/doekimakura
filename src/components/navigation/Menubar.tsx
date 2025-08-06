"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MENU_ITEMS } from "./constants";
import "./navigation.css";

export const Menubar = () => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          {MENU_ITEMS.map((item, index) => (
            <NavigationMenuLink
              key={index}
              className={`${navigationMenuTriggerStyle()} cursor-pointer rounded-full`}
            >
              <div>{item.title}</div>
            </NavigationMenuLink>
          ))}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={`${navigationMenuTriggerStyle()} contact-button cursor-pointer rounded-full px-4 py-2 transition-colors duration-200`}
          >
            <div>Contact</div>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
