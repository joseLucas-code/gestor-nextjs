'use client';

import { forwardRef, useState } from 'react';
import { InputProps } from './types';
import { Eye, EyeClosed } from 'lucide-react';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ IconName, id, label, type = 'text', ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
      <div className="flex flex-col gap-1">
        {label && <label htmlFor={id}>{label}</label>}
        <label
          className="relative flex gap-2 rounded-sm items-center border-2 shadow-default w-full px-3 py-2 focus-within:border-primary/80 transition-[border,bg] focus-within:bg-primary/10 "
          htmlFor={id}
        >
          <IconName className="text-zinc-900 size-6" />
          <input
            id={id}
            ref={ref}
            type={type !== 'password' ? type : isVisible ? 'text' : 'password'}
            className="focus:bg-none focus:border-none focus:outline-none text-foreground w-full"
            {...props}
          />

          {type === 'password' && (
            <button className="size-7" onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? (
                <Eye className="size-full" />
              ) : (
                <EyeClosed className="size-full" />
              )}
            </button>
          )}
        </label>
      </div>
    );
  },
);
