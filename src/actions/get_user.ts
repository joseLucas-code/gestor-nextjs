"use server";

import { userSchema } from "@/schemas/userSchema";
import { cookies } from "next/headers";

export async function getUserAction() {
  const token = (await cookies()).get("token")?.value;
  if (token) {
    try {
      const response = await fetch(process.env.PUBLIC_URL + "/user/data", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const data = await response.json();
      if (!response.ok) throw new Error("Error: " + data.message);

      const parsed = userSchema.safeParse(data);
      if (parsed.success) {
        return {
          data: parsed.data,
          message: null,
          ok: true,
        };
      } else {
        throw new Error("Error de validação dos dados");
      }
    } catch (error) {
      return {
        data: null,
        message:
          error instanceof Error
            ? error.message
            : "Error ao receber dados do usuário",
        ok: false,
      };
    }
  } else {
    return {
      data: null,
      message: "Token inválido",
      ok: false,
    };
  }
}
