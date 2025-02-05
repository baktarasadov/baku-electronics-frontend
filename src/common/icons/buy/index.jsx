import React from "react";
import { cn } from "@/common/utils/lib";

export const BuyIcon = ({ className }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
  >
    <path
      d="M1.36475 1.88531L3.53141 2.26031L4.53454 14.2114C4.61475 15.1874 5.43037 15.9364 6.40954 15.9332H17.7731C18.7075 15.9353 19.5002 15.2478 19.6325 14.3228L20.621 7.49157C20.7314 6.72802 20.2012 6.01969 19.4387 5.90927C19.372 5.8999 3.87933 5.89469 3.87933 5.89469"
      stroke="currentColor" // Use currentColor to use the class's color
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.2136 9.74459H16.1022"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.95265 19.5443C6.26619 19.5443 6.51932 19.7984 6.51932 20.1109C6.51932 20.4245 6.26619 20.6786 5.95265 20.6786C5.63911 20.6786 5.38599 20.4245 5.38599 20.1109C5.38599 19.7984 5.63911 19.5443 5.95265 19.5443Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.7029 19.5443C18.0164 19.5443 18.2706 19.7984 18.2706 20.1109C18.2706 20.4245 18.0164 20.6786 17.7029 20.6786C17.3894 20.6786 17.1362 20.4245 17.1362 20.1109C17.1362 19.7984 17.3894 19.5443 17.7029 19.5443Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
