"use client";
import { getUserAction } from "@/actions/get_user";
import { useUserStore } from "@/stores/userStore/userStore";
import { useEffect } from "react";

export default function AutoLogin() {
  const { isLogged, setUser } = useUserStore();
  useEffect(() => {
    if (!isLogged) {
      const autoLogin = async () => {
        try {
          const response = await getUserAction();
          if (!response.ok) throw new Error("Error: " + response.message);
          if (response.data) {
            setUser(response.data);
          }
        } catch (error) {
          if (error instanceof Error) {
            console.error(error.message);
          }
        }
      };
      autoLogin();
    }
  }, [isLogged, setUser]);
  return null;
}
