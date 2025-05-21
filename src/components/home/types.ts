import { HomeSchemaType } from "@/schemas/homeSchema";

export type BannerProps = {
  banner: string | undefined;
  opening_hours: {
    open: string;
    close: string;
  };
};

export type HomeListProps = {
  services: HomeSchemaType["services"];
  opening_hours: {
    open: string;
    close: string;
  };
};

export type HomeServiceItemProps = {
  service: HomeSchemaType["services"][number];
};

export type HomeItemControllerPriceProps = {
  price: string;
  discount_percentage: string;
};

export type HomeListControllerProps = Pick<HomeListProps, "services">;
