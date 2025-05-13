'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Lock, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex-1 bg-[url(/cat_bg.png)] bg-cover bg-center ">
      <Tabs
        defaultValue="login"
        className="backdrop-blur-md w-full h-full flex items-center justify-center px-2"
      >
        <div className="p-2 bg-zinc-950 border border-border rounded-md w-full space-y-3">
          <TabsList className="w-full">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Cadastre-se</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardContent className="space-y-6 flex flex-col">
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
                  className="font-semibold w-fit self-end"
                >
                  Esqueci minha senha
                </Link>
                <Button>Login</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
