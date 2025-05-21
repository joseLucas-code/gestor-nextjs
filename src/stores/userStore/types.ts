import { UserSchemaType } from "@/schemas/userSchema";

export type UserState = {
  isLogged: boolean;
  user: UserSchemaType | null;
};

export type UserActions = {
  setUser: (user: UserSchemaType) => void;
  logout: () => void;
};
