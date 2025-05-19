import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Gestor - Autenticação",
  description: "Gestor de agendamentos - area para login",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} dark antialiased`}>
        <main className="font-inter flex min-h-dvh w-full">{children}</main>
        <Toaster
          toastOptions={{
            classNames: {
              success: "!bg-emerald-700 !text-zinc-200 !border-none",
              error: "!bg-red-700 !text-zinc-200 !border-none ",
            },
          }}
        />
      </body>
    </html>
  );
}
