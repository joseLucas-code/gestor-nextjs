import passwordLostAction from "@/actions/password_lost";
import {
  passwordLostSchema,
  PasswordLostSchemaType,
} from "@/schemas/passwordLostSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function usePasswordLostController() {
  const router = useRouter();
  const form = useForm<PasswordLostSchemaType>({
    resolver: zodResolver(passwordLostSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: PasswordLostSchemaType) => {
    const response = await passwordLostAction(data.email);
    toast.success(response?.message);
    router.push(`/auth/password_email_verify?email=${data.email}`);
  };

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
    isSubmitting: form.formState.isSubmitting,
  };
}
