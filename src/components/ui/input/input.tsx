"use client";

import { forwardRef, useState } from "react";
import { InputProps } from "./types";
import { Eye, EyeClosed } from "lucide-react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ IconName, id, type = "text", className, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
      <label
        className={cn(
          "shadow-default focus-within:border-primary/80 focus-within:bg-primary/10 border-border relative flex w-full items-center gap-2 rounded-sm border-2 px-3 py-2 transition-[border,background]",
          className,
        )}
        htmlFor={id}
      >
        <IconName className="text-foreground size-6" />
        <input
          id={id}
          ref={ref}
          type={type !== "password" ? type : isVisible ? "text" : "password"}
          className="text-foreground w-full bg-transparent focus:border-none focus:bg-none focus:outline-none"
          {...props}
        />

        {type === "password" && (
          <span
            className="size-7 cursor-pointer"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? (
              <Eye className="size-full" />
            ) : (
              <EyeClosed className="size-full" />
            )}
          </span>
        )}
      </label>
    );
  },
);

Input.displayName = "Input";
