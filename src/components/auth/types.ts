import { SignInSchemaType } from "@/schemas/signinSchema";
import { Dispatch, SetStateAction } from "react";
import { FormState, UseFormReturn } from "react-hook-form";

export type LoginFormProps = {
  onSubmitLogin: (data: SignInSchemaType) => void;
  formLogin: UseFormReturn<
    {
      email: string;
      password: string;
    },
    unknown,
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

export type RegisterFormProps = {
  setTabs: Dispatch<SetStateAction<string>>;
};
