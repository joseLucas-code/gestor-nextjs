import { useRouter } from "next/router";
import React from "react";

export default function OAuthPage() {
  const router = useRouter();
  const code = router.query.code as string;
  console.log(code);
  return <div>OAuthPage</div>;
}
