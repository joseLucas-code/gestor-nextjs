import { z } from "zod";

export const generalInfoSchema = z.object({
  banner: z.string().nullable().optional(),

  cnpj: z.string().regex(/^\d{14}$/, {
    message: "CNPJ deve conter exatamente 14 números, sem ponto ou traço",
  }),
  adress: z.object({
    cep: z.string().regex(/^\d{8}$/, {
      message: "CEP deve conter exatamente 8 números, sem traço",
    }),

    locality: z
      .string()
      .min(3, { message: "Cidade deve conter no mínimo 3 caracteres" })
      .max(30, { message: "Cidade deve conter no máximo 30 caracteres" }),

    uf: z
      .string()
      .min(2, { message: "UF deve conter exatamente 2 caracteres" })
      .max(2, { message: "UF deve conter exatamente 2 caracteres" }),

    neighborhood: z
      .string()
      .min(3, { message: "Bairro deve conter no mínimo 3 caracteres" })
      .max(30, { message: "Bairro deve conter no máximo 30 caracteres" }),

    street: z
      .string()
      .min(3, { message: "Rua deve conter no mínimo 3 caracteres" })
      .max(30, { message: "Rua deve conter no máximo 30 caracteres" }),

    number: z
      .string()
      .min(1, { message: "Número deve conter pelo menos 1 caractere" })
      .max(10, { message: "Número deve conter no máximo 10 caracteres" }),

    complement: z
      .string()
      .min(1, { message: "Complemento deve conter no mínimo 1 caractere" })
      .max(30, { message: "Complemento deve conter no máximo 30 caracteres" })
      .optional(),
  }),
});

export type GeneralInfoType = z.infer<typeof generalInfoSchema>;
