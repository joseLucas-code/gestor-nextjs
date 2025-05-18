"use client";

import LoginForm from "@/components/auth/login_form";
import RegisterForm from "@/components/auth/register_form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Home() {
  const [tabs, setTabs] = useState("login");
  return (
    <div className="flex-1 bg-[url(/cat_bg.png)] bg-cover bg-center">
      <div className="flex h-full w-full items-center justify-center p-2 backdrop-blur-xl">
        <Tabs
          value={tabs}
          onValueChange={setTabs}
          className="border-border w-full max-w-sm rounded-md border bg-zinc-950 p-2"
        >
          <TabsList className="w-full">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Cadastre-se</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register">
            <RegisterForm setTabs={setTabs} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
