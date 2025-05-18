"use client";

import LoginForm from "@/components/auth/login_form";
import RegisterForm from "@/components/auth/register_form";
import AuthCard from "@/components/ui/auth-card";
import BackgroundBlur from "@/components/ui/bg-blur";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function AuthPage() {
  const [tabs, setTabs] = useState("login");
  return (
    <BackgroundBlur>
      <AuthCard>
        <Tabs value={tabs} onValueChange={setTabs}>
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
      </AuthCard>
    </BackgroundBlur>
  );
}
