"use server";

import { SignInSchemaType } from "@/schemas/signinSchema";
import { cookies } from "next/headers";

const API_URL = process.env.PUBLIC_URL || "";

export async function loginAction(data: SignInSchemaType) {
  try {
    const res = await fetch(API_URL + "/auth/login", {
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
