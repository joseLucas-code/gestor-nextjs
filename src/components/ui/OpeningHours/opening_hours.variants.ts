import { cva } from "class-variance-authority";

export const OpeningVariants = cva(
  " flex items-center gap-2 text-sm font-medium",
  {
    variants: {
      variant: {
        default: "text-foreground",
        popover: "text-popover-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
