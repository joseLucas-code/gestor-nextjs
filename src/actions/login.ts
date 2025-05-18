"use server";

import { SignInSchemaType } from "@/schemas/signinSchema";
import { cookies } from "next/headers";

export async function loginAction(data: SignInSchemaType) {
  try {
    const res = await fetch(process.env.PUBLIC_URL + "/auth/login", {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (!res.ok) throw new Error(json?.message || "Error no servidor");

    if (!json.token || typeof json.token !== "string") {
      throw new Error("Token inválido recebido do servidor.");
    }

    (await cookies()).set("token", json.token, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24, // 1 dia
      sameSite: "lax",
      path: "/",
    });
    return {
      message: null,
      ok: true,
    };
  } catch (error) {
    console.error("Error no login " + error);
    return {
      ok: false,
      message: error instanceof Error ? error.message : "erro no login",
    };
  }
}
