"use client";

import { passwordEmailVerifyAction } from "@/actions/password_email_verify";
import passwordLostAction from "@/actions/password_lost";
import {
  passwordEmailVerifySchema,
  PasswordEmailVerifySchemaType,
} from "@/schemas/passwordEmailVerifySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { PasswordEmailVerifyFormProps } from "./types";

export function usePasswordEmailVerifyController({
  email,
}: PasswordEmailVerifyFormProps) {
  const [canSendCode, setCanSendCode] = useState(true);
  const router = useRouter();
  const form = useForm<PasswordEmailVerifySchemaType>({
    resolver: zodResolver(passwordEmailVerifySchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = async (data: PasswordEmailVerifySchemaType) => {
    if (email) {
      try {
        const response = await passwordEmailVerifyAction({
          code: data.code,
          email,
        });
        if (!response.ok) throw new Error(response.message);
        toast.success("Codigo verificado com sucesso!");
        router.replace(`/auth/password_reset?reset_token=${response?.token}`);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }
    }
  };

  const SubmitCode = async (email: string | null) => {
    if (email && canSendCode) {
      await passwordLostAction(email);
      toast.success("Codigo reenviado com sucesso!");
      setCanSendCode(false);
      setTimeout(() => {
        setCanSendCode(true);
      }, 120000);
    }
  };

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
    isSubmitting: form.formState.isSubmitting,
    SubmitCode,
  };
}
