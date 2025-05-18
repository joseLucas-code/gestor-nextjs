import { z } from "zod";

export const passwordLostSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
});

export type PasswordLostSchemaType = z.infer<typeof passwordLostSchema>;
