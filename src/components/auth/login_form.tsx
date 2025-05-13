"use client";

import { Aperture, Lock, Mail } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input/input";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { LoginFormProps } from "./types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

export default function LoginForm({
  formLogin,
  onSubmitLogin,
  formState,
}: LoginFormProps) {
  return (
    <Form {...formLogin}>
      <Card>
        <CardContent className="flex flex-col gap-6">
          <form
            onSubmit={formLogin.handleSubmit(onSubmitLogin)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={formLogin.control}
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
              control={formLogin.control}
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
              className="w-fit self-end font-semibold"
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
          <Button variant="outline">
            <Aperture />
            <span>Continuar com google</span>
          </Button>
        </CardContent>
      </Card>
    </Form>
  );
}
