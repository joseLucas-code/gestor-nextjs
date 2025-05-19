import Image from "next/image";
import React from "react";
import { BannerProps } from "./types";

export default function Banner({ banner }: BannerProps) {
  return (
    <article className="relative aspect-video">
      <Image
        src={banner ?? ""}
        alt="Banner"
        width={800}
        height={400}
        className="w-full rounded-md object-cover"
      />
    </article>
  );
}
