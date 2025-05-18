"use client";

import { signinSchema, SignInSchemaType } from "@/schemas/signinSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginAction } from "@/actions/login";
import { toast } from "sonner";

export function useLoginController() {
  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInSchemaType): Promise<void> => {
    try {
      const res = await loginAction(data);

      if (!res.ok) throw new Error(res.message ?? "Error ao realizar login");

      toast.success("Login realizado com sucesso");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message || "Error interno");
      }
    }
  };

  return {
    handleSubmit: form.handleSubmit(onSubmit),
    form,
    formState: form.formState,
  };
}
