import { create } from "zustand";
import { UserActions, UserState } from "./types";
import { userSchema } from "@/schemas/userSchema";

export const useUserStore = create<UserActions & UserState>((set) => ({
  isLogged: false,
  user: null,
  setUser: (user) =>
    set(() => {
      const parsedUser = userSchema.safeParse(user);
      if (parsedUser.success) {
        return { user: user, isLogged: true };
      } else {
        return { user: null, isLogged: false };
      }
    }),
  logout: () => set({ user: null, isLogged: false }),
}));
