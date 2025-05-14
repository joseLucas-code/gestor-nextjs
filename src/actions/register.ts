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
    if (!res.ok) throw new Error("Email ou senha Inválidos");
    const json = await res.json();
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
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
