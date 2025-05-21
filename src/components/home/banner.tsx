import Image from "next/image";
import { BannerProps } from "./types";
import { Codesandbox } from "lucide-react";
import OpeningHours from "../ui/OpeningHours/OpeningHours";

export default function Banner({ banner, opening_hours }: BannerProps) {
  return (
    <article className="relative flex max-h-72 w-full items-center justify-center overflow-hidden lg:rounded-md">
      <Image src={banner ?? ""} alt="Banner" width={1280} height={320} />
      <div className="bg-popover-secondary/80 text-popover-secondary-foreground absolute inset-0 flex flex-col items-center justify-start gap-2 pt-10 lg:hidden">
        <h1 className="flex items-center gap-2 text-xl font-medium md:text-2xl">
          <Codesandbox />
          Gestor de agendamentos
        </h1>
        <OpeningHours opening_hours={opening_hours} variant="popover" />
      </div>
    </article>
  );
}
