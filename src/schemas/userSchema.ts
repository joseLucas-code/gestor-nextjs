import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  full_name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  image: z.string().url().nullable(),
  role: z.enum(["user", "admin"]),
});

export type UserSchemaType = z.infer<typeof userSchema>;
