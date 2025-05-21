import Image from "next/image";
import React from "react";
import { BannerProps } from "./types";

export default function Banner({ banner }: BannerProps) {
  return (
    <article className="flex max-h-72 w-full items-center justify-center overflow-hidden lg:rounded-md">
      <Image src={banner ?? ""} alt="Banner" width={1280} height={320} />
    </article>
  );
}
