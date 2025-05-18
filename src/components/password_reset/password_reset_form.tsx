"use client";

import { Lock } from "lucide-react";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input/input";
import { usePasswordResetController } from "./password_reset.controller";
import { redirect, useSearchParams } from "next/navigation";

export default function PasswordResetForm() {
  const params = useSearchParams();
  const resetToken = params.get("reset_token");
  const { form, handleSubmit, isSubmitting } = usePasswordResetController({
    resetToken,
  });

  if (!resetToken) redirect("/");
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nova senha</FormLabel>
              <FormControl>
                <Input
                  IconName={Lock}
                  id="password"
                  type="password"
                  placeholder="Digite sua nova senha"
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
              <FormLabel>Confirme sua nova senha</FormLabel>
              <FormControl>
                <Input
                  IconName={Lock}
                  id="repassword"
                  type="password"
                  placeholder="Confirme sua nova senha"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Carregando..." : "Resetar senha"}
        </Button>
      </form>
    </Form>
  );
}
