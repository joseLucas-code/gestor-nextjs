import type { Metadata } from "next";
import SideBar from "@/components/ui/sidebar/sidebar";
import BottomTabs from "@/components/ui/bottom-tab/bottom-tab";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "Gestor - Home",
  description: "Gestor de agendamentos - tela inicial",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-4 lg:pr-4">
      <SideBar />
      <ScrollArea className="flex h-dvh w-full lg:pt-4">
        <main className="mx-auto max-w-7xl flex-1">{children}</main>
      </ScrollArea>
      <BottomTabs />
    </div>
  );
}
