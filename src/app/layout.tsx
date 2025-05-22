import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import AutoLogin from "@/components/auto_login";
import { Suspense } from "react";
import LoginLoading from "@/components/login_loading";

config.autoAddCss = false;

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
      <body className={`${inter.variable} gap-4 antialiased`}>
        {children}
        <Toaster
          toastOptions={{
            classNames: {
              success: "!bg-emerald-700 !text-zinc-200 !border-none",
              error: "!bg-red-700 !text-zinc-200 !border-none ",
            },
          }}
        />
        <Suspense fallback={<LoginLoading />}>
          <AutoLogin />
        </Suspense>
      </body>
    </html>
  );
}
