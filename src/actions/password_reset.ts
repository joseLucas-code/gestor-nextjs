"use server";

import { JsonType } from "./password_lost";

type ActionProps = {
  password?: string;
  repassword?: string;
  resetToken?: string;
};

export async function passwordResetAction({
  password,
  repassword,
  resetToken,
}: ActionProps) {
  if (password && repassword && resetToken) {
    try {
      const response = await fetch(
        process.env.PUBLIC_URL + "/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + resetToken,
          },
          body: JSON.stringify({
            password,
            repassword,
          }),
        },
      );
      const json: JsonType = await response.json();
      if (!response.ok) throw new Error(json.message);

      return {
        ok: true,
        message: json?.message,
      };
    } catch (error) {
      return {
        ok: false,
        message:
          error instanceof Error ? error.message : "Error ao resetar senha",
      };
    }
  }
}
