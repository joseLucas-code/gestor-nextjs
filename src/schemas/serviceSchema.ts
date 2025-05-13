import { z } from "zod";

export const serviceSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Nome muito curto" })
    .max(50, { message: "Nome muito longo" }),
  description: z
    .string()
    .min(3, { message: "Descrição muito curta" })
    .max(300, { message: "Descrição muito longa" }),
  price: z
    .string()
    .regex(/^[0-9]+(,[0-9]+)?$/, {
      message: "Preço deve conter apenas números e uma virgula!",
    })
    .min(1, { message: "Preço não pode ser vazio." }),
  status: z.enum(["Ativo", "Inativo"], {
    required_error: "Selecione um status.",
  }),
});

export type ServiceType = z.infer<typeof serviceSchema>;
