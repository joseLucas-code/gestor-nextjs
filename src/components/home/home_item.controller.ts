import { HomeItemControllerPriceProps } from "./types";

export function useHomeItemController({
  price,
  discount_percentage,
}: HomeItemControllerPriceProps) {
  function formatedPrice(propsPrice?: string) {
    if (Number(price) === 0 && discount_percentage === "100") {
      return "Gratis";
    }
    return Number(propsPrice ? propsPrice : price).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  function priceWithDiscount() {
    if (discount_percentage === "100") {
      return "Gratis";
    }
    return formatedPrice(
      (Number(price) * (1 - Number(discount_percentage) / 100)).toString(),
    );
  }

  return {
    formatedPrice,
    priceWithDiscount,
  };
}
