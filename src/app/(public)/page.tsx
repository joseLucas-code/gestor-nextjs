import HomeContent from "@/components/home/home_content";
import React, { Suspense } from "react";

export default function HomePage() {
  return (
    <Suspense fallback={"carregando..."}>
      <HomeContent />
    </Suspense>
  );
}
