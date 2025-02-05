import { cn } from "@/common/utils/lib";

export const HamburgerMenuIcon = ({ className }) => {
  return (
    <svg
      className={cn(className)}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1"
        y1="6.88232"
        x2="19"
        y2="6.88232"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="1"
        y1="1"
        x2="19"
        y2="1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="1"
        y1="12.7647"
        x2="19"
        y2="12.7647"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
