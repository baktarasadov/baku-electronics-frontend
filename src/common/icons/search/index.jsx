import { cn } from "@/common/utils/lib";
import React from "react";

export const SearchIcon = ({ className }) => {
  return (
    <svg
      className={cn("stroke-current", className)}
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <circle
          cx="7"
          cy="7"
          r="6"
          stroke="currentColor"
          strokeWidth="1.48702"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M10.8398 12L13.115 14.2969"
          stroke="currentColor"
          strokeWidth="1.48702"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
