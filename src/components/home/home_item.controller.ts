import { HomeItemControllerPriceProps } from "./types";

export function useHomeItemController({
  price,
  discount_percentage,
}: HomeItemControllerPriceProps) {
  function formatedPrice(Internalprice?: string) {
    return Number(Internalprice ? Internalprice : price).toLocaleString(
      "pt-br",
      {
        style: "currency",
        currency: "BRL",
      },
    );
  }

  function priceWithDiscount() {
    return formatedPrice(
      (Number(price) * (Number(discount_percentage) / 100)).toString(),
    );
  }

  return {
    formatedPrice,
    priceWithDiscount,
  };
}
