import { z } from "zod";

const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

const timeOrNullSchema = z
  .string()
  .refine((val) => val === "null" || timeRegex.test(val), {
    message: "Horário deve estar no formato HH:mm (00:00 até 23:59) ou 'null'",
  });

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
  opening_hours: z.object({
    open: timeOrNullSchema,
    close: timeOrNullSchema,
  }),
});

export type HomeSchemaType = z.infer<typeof homeSchema>;
