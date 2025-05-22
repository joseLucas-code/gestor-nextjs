"use client";

import { signinSchema, SignInSchemaType } from "@/schemas/signinSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginAction } from "@/actions/login";
import { toast } from "sonner";
import { getUserAction } from "@/actions/get_user";
import { useUserStore } from "@/stores/userStore/userStore";
import { useRouter } from "next/navigation";

export function useLoginController() {
  const { setUser } = useUserStore();
  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const onSubmit = async (data: SignInSchemaType): Promise<void> => {
    try {
      const resLogin = await loginAction(data);
      if (!resLogin.ok)
        throw new Error(resLogin.message ?? "Error ao realizar login");

      const resGetUser = await getUserAction();
      if (!resGetUser.ok)
        throw new Error(resGetUser.message ?? "Error ao realizar login");

      if (resGetUser.data) {
        setUser(resGetUser.data);
        toast.success("Login realizado com sucesso");
        router.replace("/");
      }
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
