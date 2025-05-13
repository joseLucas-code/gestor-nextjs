import { SignInSchemaType } from "@/schemas/signinSchema";
import { FormState, UseFormReturn } from "react-hook-form";

export type LoginFormProps = {
  onSubmitLogin: (data: SignInSchemaType) => void;
  formLogin: UseFormReturn<
    {
      email: string;
      password: string;
    },
    any,
    {
      email: string;
      password: string;
    }
  >;
  formState: FormState<{
    email: string;
    password: string;
  }>;
};
