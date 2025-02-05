import { cn } from "@/common/utils/lib";
import React from "react";

export const LikeIcon = ({ className }) => {
  return (
    <svg
      className={cn(className)}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.8932 10.1653C1.99903 7.3736 3.04403 4.18277 5.97487 3.2386C7.51653 2.7411 9.2182 3.03443 10.4999 3.9986C11.7124 3.0611 13.4765 2.74443 15.0165 3.2386C17.9474 4.18277 18.999 7.3736 18.1057 10.1653C16.714 14.5903 10.4999 17.9986 10.4999 17.9986C10.4999 17.9986 4.33153 14.6419 2.8932 10.1653Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-current"
      />
      <path
        d="M13.8333 6.08334C14.725 6.37168 15.355 7.16751 15.4308 8.10168"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-current"
      />
    </svg>
  );
};
