"use client";
import { useTheme } from "next-themes";
import { Switch } from "../ui/switch";
import Image from "next/image";

export function ThemeSwitch() {
  const { setTheme, theme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="relative ">
        <Switch
          className="bg-eerie-black [&>span]:!bg-white-smoke w-[48px] md:w-[54px] h-[26px] md:h-[30px] rounded-[19px] 
          sm:[&>span]:h-[24px] sm:[&>span]:w-[24px] sm:[&>span]:rounded-[15px]
          [&>span]:h-[20px] [&>span]:w-[20px] [&>span]:rounded-[10px]

          [&>span]:data-[state=checked]:translate-x-[26px] 
          [&>span]:data-[state=unchecked]:translate-x-[2px]
          transition-transform duration-300 ease-in-out "
          checked={theme === "dark"}
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        />
        {theme != "dark" ? (
          <Image
            src="/images/icons/sun.svg"
            alt="sung.svg"
            className="absolute top-[6px] right-[4px] sm:top-[8px] sm:right-[7px]"
            width={14}
            height={14}
            onClick={handleThemeToggle}
          />
        ) : (
          <Image
            src="/images/icons/moon.svg"
            alt=""
            className="absolute top-[6px] left-[4px] sm:top-[8px] sm:left-[7px]"
            width={14}
            height={14}
            onClick={handleThemeToggle}
          />
        )}
      </div>
    </>
  );
}
