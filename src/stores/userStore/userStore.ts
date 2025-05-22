import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { UserActions, UserState } from "./types";
import { userSchema } from "@/schemas/userSchema";

export const useUserStore = create<UserActions & UserState>()(
  devtools(
    (set) => ({
      isLogged: false,
      user: null,
      setUser: (user) =>
        set(
          () => {
            const parsedUser = userSchema.safeParse(user);
            if (parsedUser.success) {
              return { user: user, isLogged: true };
            } else {
              console.error("Erro de validação", parsedUser.error.format());
              return { user: null, isLogged: false };
            }
          },
          undefined,
          "setUser",
        ), // <-- nome da action visível no DevTools
      logout: () => set({ user: null, isLogged: false }, undefined, "logout"), // idem
    }), // <-- nome da store visível no DevTools
  ),
);
