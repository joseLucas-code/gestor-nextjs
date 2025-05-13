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

  const onSubmit = async (data: SignInSchemaType) => {
    try {
      const res = await loginAction(data);

      if (res && !res.ok)
        throw new Error(res.message ?? "Error ao realizar login");

      toast.success("Login realizado com sucesso", {
        className: "bg-emerald-600",
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return {
    onSubmitLogin: onSubmit,
    formLogin: form,
    formState: form.formState,
  };
}
