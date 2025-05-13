import { z } from "zod";

export const homeSchema = z.object({
  banner: z.string().nullable(),
  services: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      price: z.string(),
      description: z.string(),
      image: z.string().nullable(),
    }),
  ),
  opening_hours: z.object({
    friday: z.string(),
    monday: z.string(),
    sunday: z.string(),
    tuesday: z.string(),
    saturday: z.string(),
    thursday: z.string(),
    wednesday: z.string(),
  }),
});

export type HomeType = z.infer<typeof homeSchema>;
export type HomeServiceType = HomeType["services"][number];
