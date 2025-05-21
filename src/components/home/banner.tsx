import Image from "next/image";
import React from "react";
import { BannerProps } from "./types";
import { Codesandbox } from "lucide-react";

export default function Banner({ banner }: BannerProps) {
  return (
    <article className="relative flex max-h-72 w-full items-center justify-center overflow-hidden lg:rounded-md">
      <Image src={banner ?? ""} alt="Banner" width={1280} height={320} />
      <div className="bg-popover-secondary/80 absolute inset-0 flex items-start justify-center pt-10 lg:hidden">
        <h1 className="text-popover-secondary-foreground flex items-center gap-2 text-lg font-medium md:text-xl">
          <Codesandbox />
          Gestor de agendamentos
        </h1>
      </div>
    </article>
  );
}
