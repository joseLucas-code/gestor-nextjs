"use client";

import { registerAction } from "@/actions/register";
import { signupSchema, SignupSchemaType } from "@/schemas/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function useRegisterController() {
  const form = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
      repassword: "",
    },
  });

  const onSubmit = async (data: SignupSchemaType) => {
    try {
      const res = await registerAction(data);

      if (res && !res.ok)
        throw new Error(res.message ?? "Error ao realizar Cadastro");

      toast.success("Cadastro realizado com sucesso");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message || "Erro interno");
      }
    }
  };

  return {
    handleSubmit: form.handleSubmit(onSubmit),
    form,
    formState: form.formState,
  };
}
