import { HomeItemControllerPriceProps } from "./types";

export function useHomeItemController({
  price,
  discount_percentage,
}: HomeItemControllerPriceProps) {
  function formatedPrice() {
    return Number(price).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  function priceWithDiscount() {
    return (Number(price) * (Number(discount_percentage) / 100)).toLocaleString(
      "pt-br",
      {
        style: "currency",
        currency: "BRL",
      },
    );
  }

  return {
    formatedPrice,
    priceWithDiscount,
  };
}
