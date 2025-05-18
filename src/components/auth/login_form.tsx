"use client";

import { Aperture, Lock, Mail } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input/input";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useLoginController } from "./login.controller";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const { handleSubmit, form, formState } = useLoginController();
  const router = useRouter();
  // Função para lidar com o login pelo Google
  const handleGoogleLogin = async () => {
    try {
      // Abre a janela de autenticação do Google
      const googleAuthWindow = window.open(
        "https://api-gestor-agendamentos.up.railway.app/oauth2/authorization/google",
        "_blank",
        "width=500,height=600",
      );

      // Escuta mensagens do popup
      const messageListener = (event: MessageEvent) => {
        if (event.origin !== "https://api-gestor-agendamentos.up.railway.app") {
          return;
        }

        if (event.data.type === "AUTH_SUCCESS") {
          // Fecha a janela do popup
          googleAuthWindow?.close();

          // Redireciona para a página inicial ou dashboard
          router.push("/");
        }
      };

      window.addEventListener("message", messageListener);

      // Limpa o listener quando o componente é desmontado
      return () => {
        window.removeEventListener("message", messageListener);
      };
    } catch (error) {
      console.error("Erro no login com Google:", error);
    }
  };
  return (
    <Form {...form}>
      <Card>
        <CardContent className="flex flex-col gap-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      IconName={Mail}
                      id="email"
                      placeholder="Digite seu email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      IconName={Lock}
                      type="password"
                      id="password"
                      placeholder="Digite sua senha"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <Link
              href="/password_lost"
              className="w-fit self-end text-sm font-semibold hover:underline"
            >
              Esqueci minha senha
            </Link>
            <Button type="submit" disabled={formState.isSubmitting}>
              {formState.isSubmitting ? "Carregando..." : "Login"}
            </Button>
          </form>
          <div className="flex w-full items-center gap-4">
            <Separator />
            <span>Ou</span>
            <Separator />
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={handleGoogleLogin}
          >
            <Aperture />
            <span>Continuar com google</span>
          </Button>
        </CardContent>
      </Card>
    </Form>
  );
}
