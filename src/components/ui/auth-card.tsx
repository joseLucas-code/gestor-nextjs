import React, { PropsWithChildren } from "react";

export default function AuthCard({ children }: PropsWithChildren) {
  return (
    <div className="border-border w-full max-w-sm rounded-md border bg-zinc-950 p-2">
      {children}
    </div>
  );
}
