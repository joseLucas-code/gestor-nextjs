"use client";
import { HomeListProps } from "./types";
import HomeServiceItem from "./home_item";
import { Input } from "../ui/input/input";
import { Search } from "lucide-react";
import { useHomeListController } from "./home_list.controller";
import OpeningHours from "../ui/OpeningHours/OpeningHours";

export default function HomeList({ services, opening_hours }: HomeListProps) {
  const { filteredSearch, search, setSearch } = useHomeListController({
    services,
  });
  return (
    <div className="bg-background relative z-10 -mt-10 space-y-8 rounded-xl p-2 pt-5 lg:mt-0 lg:justify-start lg:rounded-none lg:px-0 lg:pt-5">
      <div className="flex items-center gap-10">
        <Input
          id="search"
          name="search"
          type="search"
          IconName={Search}
          placeholder="Pesquise um serviço"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          className="flex-1 py-2 lg:py-4"
        />
        <span className="hidden lg:block">
          <OpeningHours opening_hours={opening_hours} />
        </span>
      </div>
      <div className="xs:grid-cols-2 mb-5 grid w-full grid-cols-1 flex-wrap gap-4 md:grid-cols-3 xl:grid-cols-4">
        {filteredSearch().length === 0 ? (
          <div className="flex flex-1 justify-center">
            Nenhum serviço encontrado.
          </div>
        ) : (
          filteredSearch().map((service) => (
            <HomeServiceItem key={service.id} service={service} />
          ))
        )}
      </div>
    </div>
  );
}
