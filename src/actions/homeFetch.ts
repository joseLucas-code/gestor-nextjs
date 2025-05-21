"use server";

export async function homeFetch() {
  const response = await fetch(process.env.PUBLIC_URL + "/public/home", {
    next: {
      revalidate: 30,
    },
  });
  return await response.json();
}
