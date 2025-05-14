"use client";

import { Lock, Mail, Phone, UserRound } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input/input";
import { useRegisterController } from "./register.controller";
import { Button } from "../ui/button";

export default function RegisterForm() {
  const { handleSubmit, form, formState } = useRegisterController();
  return (
    <Form {...form}>
      <Card>
        <CardContent className="flex flex-col gap-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      IconName={UserRound}
                      id="name"
                      placeholder="Digite seu nome"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input
                      IconName={Phone}
                      id="phone"
                      placeholder="Digite seu telefone"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            />
            <FormField
              control={form.control}
              name="repassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirme sua senha</FormLabel>
                  <FormControl>
                    <Input
                      IconName={Lock}
                      type="password"
                      id="repassword"
                      placeholder="Confirme a senha"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="mt-10"
              type="submit"
              disabled={formState.isSubmitting}
            >
              {formState.isSubmitting ? "Carregando..." : "Cadastre-se"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Form>
  );
}
