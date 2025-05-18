"use server";

import { SignupSchemaType } from "@/schemas/signupSchema";
import { cookies } from "next/headers";

export async function registerAction(data: SignupSchemaType) {
  try {
    const res = await fetch(process.env.PUBLIC_URL + "/auth/register", {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (!res.ok) throw new Error(json?.message || "Error no servidor");

    (await cookies()).set("token", json.token, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24, // 1 dia
      sameSite: "lax",
    });
    return {
      message: null,
      ok: true,
    };
  } catch (error) {
    console.error("Error no registro " + error);
    return {
      ok: false,
      message: error instanceof Error ? error.message : "Erro no registro",
    };
  }
}
