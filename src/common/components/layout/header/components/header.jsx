import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  Sheet,
  SheetTrigger,
  SheetContent,
  ThemeSwitch,
  LanguageSwitch,
} from "@/common/components";

import * as React from "react";

import Navbar from "./navbar";
import { TOP_BAR } from "../constants/top-bar-constant";
import { HamburgerMenuIcon } from "@/common/icons";

export function Header() {
  return (
    <div className="flex justify-center" >
      <header className="w-[90%] " >
        <div className="flex  w-full shrink-0 items-center px-4 md:px-6 bg-white-smoke h-[40px] sm:h-[45px] rounded-[25px] dark:bg-green-charleston">
          <Sheet>
            <SheetTrigger asChild>
              <div className="lg:hidden">
                <HamburgerMenuIcon className={"!w-[20px] !h-[20px]"} />
              </div>
            </SheetTrigger>
            <SheetContent side="left">
              <ul className="grid gap-2 py-6">
                {TOP_BAR.map((element, index) => (
                  <Link
                    key={index}
                    href={element.href}
                    prefetch={false}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    {element.title}
                  </Link>
                ))}
                <li className="lg:hidden">
                  <Link
                    href={"#"}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    Switch to previous version
                  </Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex gap-[35px] ">
              {TOP_BAR.map((element, index) => (
                <NavigationMenuLink asChild key={index}>
                  <Link
                    href={element.href}
                    prefetch={false}
                    className="text-jet font-sfpro text-md opacity-50 hover:opacity-100 ease-in transition-opacity   dark:text-white  font-medium"
                  >
                    {element.title}
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="ml-auto flex  flex items-center ">
            <Link
              href={"#"}
              className="hidden lg:block underline underline-offset-2 text-md text-jet dark:text-white font-sfpro font-normal mr-[26px]"
            >
              Switch to previous version
            </Link>
            <div className="mr-[15px] sm:mr-[19px]">
              <LanguageSwitch />
            </div>
            <ThemeSwitch />
          </div>
        </div>
        <div>
          <Navbar />
        </div>
      </header>
    </div>
  );
}
