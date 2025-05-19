import HomeContent from "@/components/home/home_content";
import React, { Suspense } from "react";

export default function HomePage() {
  return (
    <div className="w-full max-w-7xl">
      <Suspense fallback={"carregando..."}>
        <HomeContent />
      </Suspense>
    </div>
  );
}
