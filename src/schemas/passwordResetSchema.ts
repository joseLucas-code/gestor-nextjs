import { z } from "zod";

export const passwordResetSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "Senha deve conter no minimo 6 caracteres." })
      .max(16, { message: "Senha deve conter no máximo 16 caracteres." }),
    repassword: z
      .string()
      .min(6, { message: "Senha deve conter no minimo 6 caracteres." })
      .max(16, { message: "Senha deve conter no máximo 16 caracteres." }),
  })
  .refine((data) => data.password === data.repassword, {
    message: "As senhas não são iguais",
    path: ["repassword"],
  });

export type PasswordResetSchemaType = z.infer<typeof passwordResetSchema>;
