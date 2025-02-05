"use client";
import { Button } from "@/common/components";
import {LikeIcon,BasketIcon} from "@/common/icons";
import Image from "next/image";
import React from "react";

const ProductItem = ({
  image,
  slug,
  perMonth,
  discount,
  rate,
  reviewCount,
  name,
  price,
}) => {
  return (
    <>
      <div className="relative rounded-[10px] md:rounded-[24px]  bg-white-smoke dark:bg-green-charleston cursor-pointer">
        <div className=" nesen  h-[120px]  w-[80%] sm:h-[218px] flex justify-center  !mx-auto">
          <div className="relative z-[100] h-full w-[100%] border-white-smoke border rounded-[21px] top-[-25px] md:top-[-39px] ">
            <Image
              src={image}
              layout="fill"
              alt={slug}
              className="rounded-[19px] "
            />
            <span className="font-bold font-sfpro absolute left-[13px] top-[13px]  bg-red-cmyk block flex items-center justify-center text-white text-xxxs md:text-xxs px-[9px] px-[12px] rounded-[10px] h-[25px] md:h-[30px] w-fit">
              -{discount}%
            </span>
            <div className="absolute  right-[13px] top-[13px] bg-white flex justify-center items-center  h-[25px] sm:h-[30px] px-[12px] rounded-[20px] shadow-scale">
              <div className="relative md:h-[18px] md:w-[18px] w-[11px] h-[11px]">
                <Image
                  alt="scale"
                  src={"/images/icons/scale.svg"}
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
        <ul className=" kimsen text-start mt-[-1px] px-[11px] sm:px-[20px] ">
          <li className="flex gap-[13px]  ">
            <div className="flex items-center justify-center">
              <Image
                alt="star"
                src={"/images/icons/star.svg"}
                height={15}
                width={15}
              />
              <span className="dark:text-white text-jet  text-xxs ml-[1px] font-sfpro font-normal">
                {rate}
              </span>
            </div>
            <div className="flex">
              <Image
                alt="star"
                src={"/images/icons/comment.svg"}
                height={15}
                width={15}
                className="dark:invert dark:brightness-0 "
              />
              <span className="dark:text-white text-jet text-xxs ml-[1px] font-sfpro font-normal">
                {reviewCount}
              </span>
            </div>
          </li>
          <li>
            <h3 className="text-jet dark:text-white text-sm sm:text-md font-sfpro font-normal mt-1 max-h-[40px] max-w-[100%] text-ellipsis overflow-hidden ">
              {name}
            </h3>
          </li>
          <li className="flex gap-4 my-[16px] sm:my-[21px]">
            <div className="flex flex-col">
              <span className="text-jet dark:text-white line-through text-sm sm:text-md font-sfpro font-medium opacity-50">
                {price}₼
              </span>
              <span className=" text-sm sm:text-xxl dark:text-white font-bold text-onyx font-sfpro font-bold">
                {Number((price - (price * discount) / 100).toFixed(2))}₼
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-jet dark:text-white  text-sm sm:text-md font-sfpro font-medium opacity-50">
                {perMonth?.month} Month
              </span>
              <span className="text-sm sm:text-xxl dark:text-white font-bold text-onyx font-sfpro font-bold">
                {perMonth?.price}₼
              </span>
            </div>
          </li>
          <li className="flex justify-between  items-center pb-[14px] sm:pb-[20px] gap-[8px]">
            <Button className="flex items-center justify-center bg-platinum dark:bg-onyx rounded-[12px] h-[35px] w-[70%] sm:h-[45px] flex-1 hover:bg-red-cmyk transition duration-300 group">
              <BasketIcon className="text-jet dark:text-white !h-[14px] !w-[14px] sm:!h-[20px] sm:!w-[20px] transition duration-300 group-hover:text-white" />
              <p className="font-sfpro font-medium flex-1 text-sm sm:text-md text-jet dark:text-white transition duration-300 group-hover:text-white">
                Add to card
              </p>
            </Button>

            <div className="w-[35px] sm:w-[45px] h-[35px] sm:h-[45px] bg-platinum dark:bg-onyx flex justify-center items-center rounded-[12px]">
              <LikeIcon
                className={
                  "text-jet dark:text-white !h-[14px] !w-[14px] sm:!h-[20px] sm:!w-[20px]"
                }
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductItem;
