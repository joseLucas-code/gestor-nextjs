import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gestor-agendamentos.vercel.app/"),
  title: "Gestor - home",
  description: "Gestor de agendamentos criado para facilitar agendamentos",
  icons: "/favicon.ico",
  openGraph: {
    title: "Gestor de agendamentos",
    description: "Aplicação para facilitar o agendamento para buxas",
    images: "/og-img.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>
        <main className="font-inter flex min-h-dvh">{children}</main>
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
