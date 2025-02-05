import React from "react";
import { cn } from "@/common/utils/lib";

export const ProfileIcon = ({ className }) => (
  <svg
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
  >
    <path
      d="M5 18.9231C5 15.0996 8.09957 12 11.9231 12H15.0769C18.9004 12 22 15.0996 22 18.9231V18.9231C22 20.6224 20.6224 22 18.9231 22H8.07692C6.37759 22 5 20.6224 5 18.9231V18.9231Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="10"
      y="3"
      width="7"
      height="7"
      rx="3.5"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
