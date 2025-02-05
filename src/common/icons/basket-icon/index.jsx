import { cn } from "@/common/utils/lib";
import React from "react";
cn;
export const BasketIcon = ({ className }) => {
  return (
    <>
      <svg
        className={cn(className)}
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.791687 4.33676L2.52502 4.63676L3.32752 14.1976C3.39169 14.9784 4.04419 15.5776 4.82752 15.5751H13.9184C14.6659 15.5768 15.3 15.0268 15.4059 14.2868L16.1967 8.82176C16.285 8.21093 15.8609 7.64426 15.2509 7.55593C15.1975 7.54843 2.80335 7.54426 2.80335 7.54426"
          className="stroke-current"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.96083 4.96187V1.62854"
          className="stroke-current"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.66656 3.6622L8.9605 4.96165L10.2544 3.6622"
          className="stroke-current"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.46182 18.464C4.71265 18.464 4.91515 18.6673 4.91515 18.9173C4.91515 19.1682 4.71265 19.3715 4.46182 19.3715C4.21098 19.3715 4.00848 19.1682 4.00848 18.9173C4.00848 18.6673 4.21098 18.464 4.46182 18.464Z"
          className="fill-current stroke-current"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.8622 18.4639C14.113 18.4639 14.3164 18.6673 14.3164 18.9173C14.3164 19.1681 14.113 19.3714 13.8622 19.3714C13.6114 19.3714 13.4089 19.1681 13.4089 18.9173C13.4089 18.6673 13.6114 18.4639 13.8622 18.4639Z"
          className="fill-current stroke-current"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
