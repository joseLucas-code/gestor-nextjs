"use client";

import { forwardRef, useState } from "react";
import { InputProps } from "./types";
import { Eye, EyeClosed } from "lucide-react";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ IconName, id, type = "text", ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
      <div className="flex flex-col gap-1">
        <label
          className="shadow-default focus-within:border-primary/80 focus-within:bg-primary/10 relative flex w-full items-center gap-2 rounded-sm border-2 px-3 py-2 transition-[border,bg]"
          htmlFor={id}
        >
          <IconName className="size-6 text-zinc-900" />
          <input
            id={id}
            ref={ref}
            type={type !== "password" ? type : isVisible ? "text" : "password"}
            className="text-foreground w-full bg-transparent focus:border-none focus:bg-none focus:outline-none"
            {...props}
          />

          {type === "password" && (
            <span className="size-7" onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? (
                <Eye className="size-full" />
              ) : (
                <EyeClosed className="size-full" />
              )}
            </span>
          )}
        </label>
      </div>
    );
  },
);

Input.displayName = "Input";
