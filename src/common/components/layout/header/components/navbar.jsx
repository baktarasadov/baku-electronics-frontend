import {
  Select,
  SelectTrigger,
  SelectValue,
  Input,
  Button,
} from "@/common/components/ui";
import Image from "next/image";
import React from "react";
import {
  BuyIcon,
  LikeIcon,
  ProfileIcon,
  SearchIcon,
  ScaleIcon,
} from "@/common/icons";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="flex items-center gap-[6px] sm:gap-[20px]  my-[20px]">
          <li className="relative sm:w-[50px] sm:h-[50px] w-[45px] h-[45px]">
            <Image
              src={"images/logos/main-logo.svg"}
              layout="fill"
              alt="logo"
            />
          </li>
          <li>
            <Button className="bg-jet rounded-[29px] sm:rounded-[25px] h-[40px] sm:h-[50px]  flex items-center gap-xxs hover:opacity-90 ease-in transition-opacity py-0">
              <div className="relative w-[15px] h-[15px] sm:w-[18px] sm:h-[18px]">
                <Image
                  src={"/images/icons/catalog.svg"}
                  alt="katalog"
                  layout="fill"
                />
              </div>

              <p className="text-md sm:text-lg text-white font-sfpro font-bold">
                Catalog
              </p>
            </Button>
          </li>
          <li className="relative flex-1">
            <Input
              className=" bg-white-smoke rounded-[12px] h-[40px] sm:h-[50px] px-[16px] sm:px-[20px] dark:bg-jet w-full placeholder:text-onyx
              placeholder:text-lg 
              placeholder:opacity-50 dark:placeholder:text-white dark:text-white font-sfpro !font-normal"
              aria-label="Search"
              placeholder="Search...."
              style={{ fontSize: "15px" }}
            />
            <SearchIcon className="w-[14px] sm:w-[20px] h-[14px] sm:h-[20px] absolute top-1/2 right-[16px] sm:right-[20px] -translate-y-1/2 text-onyx dark:text-white-smoke" />
          </li>
          <li className="hidden lg:block">
            <Select>
              <SelectTrigger
                className="flex items-center justify-between bg-white-smoke 
              rounded-[12px] h-[50px] px-[15px] dark:bg-jet min-w-[180px] 
              text-[rgba(20,20,20,0.5)] text-lg  dark:text-[rgba(255,255,255,0.5)] 
              font-normal font-sfpro focus:ring-0 focus:ring-offset-0 focus:outline-none "
              >
                <SelectValue
                  className="text-onyx text-opacity-50 dark:text-gray-400"
                  placeholder="Baku city...            "
                />
              </SelectTrigger>
            </Select>
          </li>
          <li className="hidden lg:block">
            <ul className="flex gap-2">
              <li className="bg-white-smoke dark:bg-green-charleston p-1 relative rounded-[12px] w-[50px] h-[50px] flex justify-center items-center">
                <ScaleIcon
                  className={"text-jet w-[25px] h-[25px] dark:text-white "}
                />
              </li>
              <li className="relative bg-white-smoke dark:bg-green-charleston p-1 relative rounded-[12px] w-[50px] h-[50px] flex justify-center items-center">
                <BuyIcon
                  className={"text-jet w-[25px] h-[25px] dark:text-white "}
                />
                <sup className="absolute right-[-6px] top-[-3px] bg-red-cmyk text-white p-1 rounded-[18px] text-[8px] px-[5px] py-[7px]">
                  4+
                </sup>
              </li>
              <li className="bg-white-smoke dark:bg-green-charleston p-1 relative rounded-[12px] w-[50px] h-[50px] flex justify-center items-center">
                <LikeIcon
                  className={"text-jet w-[25px] h-[25px] dark:text-white "}
                />
              </li>

              <li className="bg-white-smoke dark:bg-green-charleston p-1 relative rounded-[12px] w-[50px] h-[50px] flex justify-center items-center">
                <ProfileIcon
                  className={"text-jet w-[25px] h-[25px] dark:text-white "}
                />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
