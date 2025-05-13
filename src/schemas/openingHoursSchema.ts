import { timeOptions } from "@/constants/timeOptions";
import { z } from "zod";

const timeValidation = z
  .string()
  .refine((val) => val === "null" || timeOptions.includes(val), {
    message: "Horário inválido!!",
  });
const daySchema = z
  .object({
    open: timeValidation,
    close: timeValidation,
  })
  .refine(
    (data) => {
      if (data.open !== "null") {
        return data.close !== "null";
      }
      return true;
    },
    {
      message:
        "Se 'Aberto as:' tiver horario, 'fecha as:' não pode estar fechado!",
      path: ["close"], // Aponta o erro para o campo `close`
    },
  );

export const openingHoursSchema = z.object({
  sunday: daySchema.optional(),
  monday: daySchema.optional(),
  tuesday: daySchema.optional(),
  wednesday: daySchema.optional(),
  thursday: daySchema.optional(),
  friday: daySchema.optional(),
  saturday: daySchema.optional(),
});

export type OpeningHoursType = z.infer<typeof openingHoursSchema>;
