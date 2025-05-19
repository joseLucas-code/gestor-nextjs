import PasswordLostForm from "@/components/password-lost/password-lost-form";
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
import React from "react";

export default function PasswordLostPage() {
  return (
    <BackgroundBlur>
      <AuthCard>
        <Card>
          <CardHeader className="space-y-6">
            <Link href={"/auth"} className="flex items-center gap-1">
              <ChevronLeft />
              Voltar
            </Link>
            <div className="space-y-1">
              <CardTitle className="text-2xl">Esqueci minha senha</CardTitle>
              <CardDescription>
                Lorem ipsum dolor met xesquedele
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <PasswordLostForm />
          </CardContent>
        </Card>
      </AuthCard>
    </BackgroundBlur>
  );
}
