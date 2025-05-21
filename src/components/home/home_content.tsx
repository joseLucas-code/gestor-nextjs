import { homeSchema } from "@/schemas/homeSchema";
import React from "react";
import Banner from "./banner";
import { homeFetch } from "@/actions/homeFetch";
import HomeList from "./home_list";

export default async function HomeContent() {
  const json = await homeFetch();

  if (!json) {
    return (
      <div className="py-8 text-center">
        Não foi possível carregar os dados.
      </div>
    );
  }

  const parsed = homeSchema.safeParse(json);

  if (!parsed.success) {
    console.error("Erro de validação:", parsed.error.format());
    return (
      <div className="py-8 text-center">
        Dados inválidos recebidos do servidor.
      </div>
    );
  }
  return (
    <div className="relative pb-20">
      <Banner
        banner={parsed.data.banner}
        opening_hours={parsed.data.opening_hours}
      />
      <HomeList
        services={parsed.data.services}
        opening_hours={parsed.data.opening_hours}
      />
    </div>
  );
}
