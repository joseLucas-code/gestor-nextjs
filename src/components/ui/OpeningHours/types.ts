import { VariantProps } from "class-variance-authority";
import { OpeningVariants } from "./opening_hours.variants";
import { ComponentPropsWithoutRef } from "react";

export type OpeningHoursProps = VariantProps<typeof OpeningVariants> &
  ComponentPropsWithoutRef<"span"> & {
    opening_hours: {
      open: string;
      close: string;
    };
  };
