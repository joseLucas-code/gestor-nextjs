import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestor - Autenticação",
  description: "Gestor de agendamentos - area para login",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="font-inter flex min-h-dvh">{children}</main>;
}
