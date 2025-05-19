import PasswordResetForm from "@/components/password_reset/password_reset_form";
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
import React, { Suspense } from "react";

export default function PasswordResetPage() {
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
              <CardTitle className="text-2xl">Resete sua senha</CardTitle>
              <CardDescription className="leading-6">
                Confirme abaixo sua nova senha
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Suspense>
              <PasswordResetForm />
            </Suspense>
          </CardContent>
        </Card>
      </AuthCard>
    </BackgroundBlur>
  );
}
