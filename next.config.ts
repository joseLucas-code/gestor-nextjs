import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["gskmjelxozcflpsdnkwe.supabase.co"],
  },
  matcher: [
    /*
     * Middleware será aplicado a todas as rotas que você quiser monitorar
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

export default nextConfig;
