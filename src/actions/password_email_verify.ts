"use server";

type ActionProps = {
  email?: string;
  code?: string;
};

type JsonType = {
  message?: string;
  tokenLink?: string;
};

export async function passwordEmailVerifyAction({ email, code }: ActionProps) {
  try {
    const response = await fetch(
      process.env.PUBLIC_URL + "/auth/reset-verify",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          code,
        }),
      },
    );

    const json: JsonType = await response.json();
    if (!response.ok) throw new Error("Error: " + json?.message);

    return {
      ok: true,
      token: json?.tokenLink,
    };
  } catch (error) {
    return {
      ok: false,
      message:
        error instanceof Error ? error.message : "Error ao enviar codigo",
    };
  }
}
