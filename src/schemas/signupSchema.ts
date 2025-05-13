import { z } from "zod";

export const singupSchema = z
  .object({
    email: z.string().email({ message: "Email inválido!" }),
    name: z
      .string()
      .min(3, { message: "Nome muito curto!" })
      .max(16, { message: "O nome deve conter no maximo 16 caractéres" })
      .regex(/^[^\d]*$/, { message: "O nome não pode conter números!" }),
    phone: z
      .string()
      .regex(/^\d+$/, { message: "O telefone deve conter apenas números." })
      .refine((val) => val.length === 11, {
        message: "Número de telefone deve ter 11 dígitos (com DDD).",
      }),
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

export type SignupSchema = z.infer<typeof singupSchema>;
