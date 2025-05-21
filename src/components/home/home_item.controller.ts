import { HomeItemControllerPriceProps } from "./types";

export function useHomeItemController({
  price,
  discount_percentage,
}: HomeItemControllerPriceProps) {
  function formatedPrice(propsPrice?: string) {
    return Number(propsPrice ? propsPrice : price).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
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
