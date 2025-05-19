import React from "react";
import { HomeListProps } from "./types";
import HomeServiceItem from "./home_item";

export default function HomeList({ services }: HomeListProps) {
  if (services.length === 0) return <div>Nenhum serviço encontrado.</div>;
  return (
    <div className="bg-background relative z-10 -mt-10 flex flex-col gap-4 rounded-xl p-2 pt-10">
      {services.map((service) => (
        <HomeServiceItem key={service.id} service={service} />
      ))}
    </div>
  );
}
