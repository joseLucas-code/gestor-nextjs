"use server";

export type JsonType = {
  message?: string;
};

export default async function passwordLostAction(email: string) {
  const res = await fetch(process.env.PUBLIC_URL + "/auth/reset-request", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  const json: JsonType = await res.json();
  if (json && typeof json.message === "string") {
    return {
      message: json.message,
    };
  }
}
