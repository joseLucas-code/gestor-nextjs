import React from "react";
import { HomeServiceItemProps } from "./types";
import Image from "next/image";

export default function HomeServiceItem({ service }: HomeServiceItemProps) {
  return (
    <div className="relative aspect-video rounded-lg border">
      <Image src={service.image ?? ""} alt="Imagem do serviço" fill />
    </div>
  );
}
