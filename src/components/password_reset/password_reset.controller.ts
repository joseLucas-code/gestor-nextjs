import {
  passwordResetSchema,
  PasswordResetSchemaType,
} from "@/schemas/passwordResetSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PasswordResetControllerProps } from "./types";
import { passwordResetAction } from "@/actions/password_reset";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function usePasswordResetController({
  resetToken,
}: PasswordResetControllerProps) {
  const router = useRouter();
  const form = useForm<PasswordResetSchemaType>({
    resolver: zodResolver(passwordResetSchema),
    defaultValues: {
      password: "",
      repassword: "",
    },
  });

  const onSubmit = async (data: PasswordResetSchemaType) => {
    if (resetToken) {
      try {
        const response = await passwordResetAction({
          resetToken,
          password: data.password,
          repassword: data.repassword,
        });
        if (!response?.ok) throw new Error(response?.message);
        toast.success("Senha resetada com sucesso");
        router.replace("/");
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }
    }
  };

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
    isSubmitting: form.formState.isSubmitting,
  };
}
