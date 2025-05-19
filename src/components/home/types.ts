import { HomeSchemaType } from "@/schemas/homeSchema";

export type BannerProps = {
  banner: string | undefined;
};

export type HomeListProps = {
  services: HomeSchemaType["services"];
};

export type HomeServiceItemProps = {
  service: HomeSchemaType["services"][number];
};
