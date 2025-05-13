"use client";

import { useLoginController } from "@/components/auth/login.controller";
import LoginForm from "@/components/auth/login_form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, Mail, Phone, UserRound } from "lucide-react";

export default function Home() {
  const { onSubmitLogin, formLogin, formState } = useLoginController();
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
            <LoginForm
              formLogin={formLogin}
              onSubmitLogin={onSubmitLogin}
              formState={formState}
            />
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <CardContent className="flex flex-col space-y-6">
                <Input
                  IconName={Mail}
                  name="email"
                  id="email"
                  placeholder="Digite seu email"
                />
                <Input
                  IconName={UserRound}
                  name="name"
                  id="name"
                  placeholder="Digite seu nome"
                />
                <Input
                  IconName={Phone}
                  name="phone"
                  id="phone"
                  placeholder="Digite seu telefone"
                />
                <Input
                  IconName={Lock}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Digite sua senha"
                />
                <Input
                  IconName={Lock}
                  type="password"
                  name="repassword"
                  id="repassword"
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
