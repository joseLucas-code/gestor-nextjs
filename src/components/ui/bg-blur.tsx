import React, { PropsWithChildren } from "react";

export default function BackgroundBlur({ children }: PropsWithChildren) {
  return (
    <div className="flex-1 bg-[url(/cat_bg.png)] bg-cover bg-center">
      <div className="flex h-full w-full items-center justify-center p-2 backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}
