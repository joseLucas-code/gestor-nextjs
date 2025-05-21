import { Clock } from "lucide-react";
import React from "react";
import { OpeningHoursProps } from "./types";
import { cn } from "@/lib/utils";
import { OpeningVariants } from "./opening_hours.variants";
import { useOpeningHoursController } from "./opening_hours.controller";

export default function OpeningHours({
  opening_hours,
  className,
  variant,
}: OpeningHoursProps) {
  const { isClosed } = useOpeningHoursController({ opening_hours });
  return (
    <span className={cn(OpeningVariants({ variant, className }))}>
      <Clock className="size-4" />
      {isClosed()
        ? "Fechado"
        : `Hoje, aberto das ${opening_hours.open} às ${opening_hours.close}`}
    </span>
  );
}
