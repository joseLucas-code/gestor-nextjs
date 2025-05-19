import type { Metadata } from "next";
import SideBar from "@/components/ui/sidebar/sidebar";
import BottomTabs from "@/components/ui/bottom-tab/bottom-tab";

export const metadata: Metadata = {
  title: "Gestor - Home",
  description: "Gestor de agendamentos - tela inicial",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-4">
      <SideBar />
      <main className="font-inter flex min-h-dvh">{children}</main>
      <BottomTabs />
    </div>
  );
}
