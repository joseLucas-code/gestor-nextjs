import { z } from "zod";
export const signinSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(6, { message: "Senha deve conter no minimo 6 caracteres." })
    .max(16, { message: "Senha deve conter no máximo 16 caracteres." }),
});

export type SignInSchemaType = z.infer<typeof signinSchema>;
