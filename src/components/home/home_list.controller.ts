import { useDeferredValue, useState } from "react";
import { HomeListControllerProps } from "./types";

export function useHomeListController({ services }: HomeListControllerProps) {
  const [search, setSearch] = useState("");
  const deferedSearch = useDeferredValue(search);

  const filteredSearch = () =>
    services.filter((service) =>
      service.name.toLowerCase().includes(deferedSearch.toLowerCase()),
    );

  return {
    filteredSearch,
    search,
    setSearch,
  };
}
