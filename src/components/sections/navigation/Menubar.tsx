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
              className={`${navigationMenuTriggerStyle()} cursor-pointer rounded-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:text-magenta`}
            >
              <div>{item.title}</div>
            </NavigationMenuLink>
          ))}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={`${navigationMenuTriggerStyle()} contact-button cursor-pointer rounded-full px-4 py-2 transition duration-300 `}
          >
            <div>Contact</div>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
