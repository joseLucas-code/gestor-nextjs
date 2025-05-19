import { Codesandbox } from "lucide-react";
import React from "react";

export default function SideBar() {
  return (
    <aside className="bg-sidebar shadow-sidebar-ring hidden shrink-0 basis-64 flex-col p-3.5 shadow-sm lg:flex">
      <div className="flex items-center gap-2">
        <Codesandbox />
        <h2 className="text-xl font-semibold">Gestor</h2>
      </div>
    </aside>
  );
}
