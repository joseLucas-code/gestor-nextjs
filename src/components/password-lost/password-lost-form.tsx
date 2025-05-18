"use client";

import React from "react";
import { usePasswordLostController } from "./password-lost.controller";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input/input";
import { Mail } from "lucide-react";
import { Button } from "../ui/button";

export default function PasswordLostForm() {
  const { form, handleSubmit, isSubmitting } = usePasswordLostController();
  return (
    <Form {...form}>
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
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Carregando..." : "Enviar codigo"}
        </Button>
      </form>
    </Form>
  );
}
