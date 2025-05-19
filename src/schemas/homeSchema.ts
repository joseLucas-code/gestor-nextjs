import { z } from "zod";

export const homeSchema = z.object({
  services: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      price: z.string(),
      discount_percentage: z.string(),
      description: z.string(),
      image: z.string().url(),
    }),
  ),
  banner: z.string().url(),
});

export type HomeSchemaType = z.infer<typeof homeSchema>;
