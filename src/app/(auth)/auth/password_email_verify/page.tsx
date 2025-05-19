import PasswordEmailVerifyForm from "@/components/password_email_verify/password_email_verify_form";
import { PasswordEmailVerifyPageProps } from "@/components/password_email_verify/types";
import AuthCard from "@/components/ui/auth-card";
import BackgroundBlur from "@/components/ui/bg-blur";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function PasswordEmailVerifyPage({
  searchParams,
}: PasswordEmailVerifyPageProps) {
  const email = (await searchParams)?.email;

  if (!email) redirect("/");
  return (
    <BackgroundBlur>
      <AuthCard>
        <Card>
          <CardHeader className="space-y-6">
            <Link
              href={"/auth/password_lost"}
              className="flex items-center gap-1"
            >
              <ChevronLeft />
              Voltar
            </Link>
            <div className="space-y-1">
              <CardTitle className="text-2xl">Verificação de Email</CardTitle>
              <CardDescription className="leading-6">
                Um codigo foi enviado para o email: {email}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <PasswordEmailVerifyForm email={email} />
          </CardContent>
        </Card>
      </AuthCard>
    </BackgroundBlur>
  );
}
