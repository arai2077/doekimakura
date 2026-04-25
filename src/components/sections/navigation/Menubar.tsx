"use client";

import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { About } from "@/components/sections/about/About";
import { MENU_ITEMS } from "./constants";
import "./navigation.css";

export const Menubar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            {MENU_ITEMS.map((item, index) => (
              <NavigationMenuLink
                key={index}
                href={item.href}
                className={`${navigationMenuTriggerStyle()} cursor-pointer rounded-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:text-magenta`}
              >
                <div>{item.title}</div>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
          <NavigationMenuItem>
            <button
              onClick={() => setIsAboutOpen(true)}
              className={`${navigationMenuTriggerStyle()} contact-button cursor-pointer rounded-full px-4 py-2 transition duration-300 hover:-translate-y-1 hover:text-magenta`}
            >
              <div>Contact</div>
            </button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Dialog open={isAboutOpen} onOpenChange={setIsAboutOpen}>
        <DialogContent className="w-[80vw] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Get in Touch</DialogTitle>
          </DialogHeader>
          <About />
        </DialogContent>
      </Dialog>
    </>
  );
};
