"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Aperture, Lock, Mail, Phone, UserRound } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 bg-[url(/cat_bg.png)] bg-cover bg-center">
      <div className="flex h-full w-full items-center justify-center px-2 backdrop-blur-xl">
        <Tabs
          defaultValue="login"
          className="border-border w-full max-w-md space-y-3 rounded-md border bg-zinc-950 p-2"
        >
          <TabsList className="w-full">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Cadastre-se</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardContent className="flex flex-col space-y-6">
                <Input
                  IconName={Mail}
                  name="email"
                  id="email"
                  label="Email"
                  placeholder="Digite seu email"
                />
                <Input
                  IconName={Lock}
                  type="password"
                  name="password"
                  id="password"
                  label="Senha"
                  placeholder="Digite sua senha"
                />
                <Link
                  href="/password_lost"
                  className="w-fit self-end font-semibold"
                >
                  Esqueci minha senha
                </Link>
                <Button>Login</Button>
                <div className="flex w-full items-center gap-4">
                  <Separator />
                  <span>Ou</span>
                  <Separator />
                </div>
                <Button variant="outline">
                  <Aperture />
                  <span>Continuar com google</span>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <CardContent className="flex flex-col space-y-6">
                <Input
                  IconName={Mail}
                  name="email"
                  id="email"
                  label="Email"
                  placeholder="Digite seu email"
                />
                <Input
                  IconName={UserRound}
                  name="name"
                  id="name"
                  label="Nome"
                  placeholder="Digite seu nome"
                />
                <Input
                  IconName={Phone}
                  name="phone"
                  id="phone"
                  label="Telefone"
                  placeholder="Digite seu telefone"
                />
                <Input
                  IconName={Lock}
                  type="password"
                  name="password"
                  id="password"
                  label="Senha"
                  placeholder="Digite sua senha"
                />
                <Input
                  IconName={Lock}
                  type="password"
                  name="repassword"
                  id="repassword"
                  label="Confirme sua senha"
                  placeholder="Confirme a senha"
                />
                <Button>Cadastrar-se</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
