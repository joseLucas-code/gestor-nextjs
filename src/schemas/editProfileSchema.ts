import { z } from "zod";

export const editProfileSchema = z
  .object({
    name: z
      .string()
      .regex(/^[A-Za-z\s]+$/, {
        message: "O nome deve conter apenas letras e espaços!",
      })
      .min(3, { message: "Nome muito curto." })
      .max(45, { message: "Nome muito grande." })
      .optional(),
    password: z
      .string()
      .min(6, { message: "Senha deve conter no minimo 6 caracteres." })
      .max(16, { message: "Senha deve conter no máximo 16 caracteres." })
      .optional()
      .or(z.literal("")),
    repassword: z
      .string()
      .min(6, { message: "Senha deve conter no minimo 6 caracteres." })
      .max(16, { message: "Senha deve conter no máximo 16 caracteres." })
      .optional()
      .or(z.literal("")),
  })
  .refine((data) => data.password === data.repassword, {
    message: "As senhas não são iguais!",
    path: ["repassword"],
  })
  .refine(
    (data) =>
      Object.values(data).some((value) => value !== "" && value !== undefined),
    {
      message: "Pelo meno um campo deve ser preenchido!",
      path: ["name"],
    },
  );

export type EditProfileType = z.infer<typeof editProfileSchema>;
