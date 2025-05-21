import Image from "next/image";
import { HomeServiceItemProps } from "./types";
import { ShoppingCart, StarIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function HomeServiceItem({ service }: HomeServiceItemProps) {
  return (
    <article className="relative flex aspect-square justify-center overflow-hidden rounded-lg border">
      <Image
        src={service.image ?? ""}
        alt="Imagem do serviço"
        width={410}
        height={410}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0">
        <div className="bg-popover-secondary/80 text-popover-secondary-foreground flex items-end p-2 backdrop-blur-lg">
          {/* left column */}
          <div className="flex flex-1 flex-col gap-1">
            <h3 className="text-lg font-semibold">{service.name}</h3>

            <div className="flex items-center gap-1 text-sm">
              <span className="flex items-center gap-2">
                <StarIcon className="fill-popover-secondary-foreground size-4" />
                4,3 /
              </span>
              <span>200 vendas</span>
            </div>

            <span className="font-medium">R$ {service.price}</span>
          </div>

          {/* right column */}
          <Button>
            <ShoppingCart />
            Carrinho
          </Button>
        </div>
      </div>
    </article>
  );
}
