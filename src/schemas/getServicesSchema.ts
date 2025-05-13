import { z } from "zod";

export const getServicesSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    price: z.string(),
    description: z.string(),
    image: z.string().nullable(),
    status: z.enum(["Ativo", "Inativo"]),
  }),
);

export const singleGetServiceSchema = getServicesSchema.element;

export type AdminServiceType = z.infer<typeof getServicesSchema>[number];
