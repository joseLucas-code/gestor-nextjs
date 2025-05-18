import { z } from "zod";

export const passwordEmailVerifySchema = z.object({
  code: z
    .string()
    .min(6, { message: "O código deve ter 6 dígitos" })
    .max(6, { message: "O código deve ter 6 dígitos" })
    .regex(/^\d+$/, { message: "O código deve conter apenas números" }),
});

export type PasswordEmailVerifySchemaType = z.infer<
  typeof passwordEmailVerifySchema
>;
