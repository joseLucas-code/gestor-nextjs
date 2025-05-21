import { homeSchema } from "@/schemas/homeSchema";
import React from "react";
import Banner from "./banner";
import { homeFetch } from "@/api/homeFetch";
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
    console.error("Erro de validação:", parsed.error.flatten());
    return (
      <div className="py-8 text-center">
        Dados inválidos recebidos do servidor.
      </div>
    );
  }
  return (
    <div className="relative">
      <Banner banner={parsed.data.banner} />
      {/* <HomeList services={parsed.data.services} /> */}
    </div>
  );
}
