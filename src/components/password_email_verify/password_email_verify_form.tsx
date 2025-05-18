"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { usePasswordEmailVerifyController } from "./password_email_verify.controller";
import { Input } from "../ui/input/input";
import { Lock } from "lucide-react";
import { Button } from "../ui/button";
import { PasswordEmailVerifyFormProps } from "./types";

export default function PasswordEmailVerifyForm({
  email,
}: PasswordEmailVerifyFormProps) {
  const { form, handleSubmit, isSubmitting, SubmitCode } =
    usePasswordEmailVerifyController({ email });
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Codigo de verificação</FormLabel>
              <FormControl>
                <Input
                  IconName={Lock}
                  id="email"
                  placeholder="Digite o codigo de verificação"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <span
          className="w-full text-right text-sm"
          onClick={() => SubmitCode(email)}
        >
          Não recebeu o codigo?{" "}
          <span className="text-primary cursor-pointer font-medium">
            Reenviar codigo
          </span>
        </span>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Carregando..." : "Enviar codigo"}
        </Button>
      </form>
    </Form>
  );
}
