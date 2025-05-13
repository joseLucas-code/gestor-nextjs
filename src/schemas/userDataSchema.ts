import { z } from "zod";

export const userDataSchema = z.object({
  id: z.string(),
  full_name: z.string(),
  email: z.string(),
  image: z.string().nullable(),
  role: z.string().nullable(),
});

export type UserDataType = z.infer<typeof userDataSchema>;
