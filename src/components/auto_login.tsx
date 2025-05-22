"use client";
import { getUserAction } from "@/actions/get_user";
import { useUserStore } from "@/stores/userStore/userStore";
import { useEffect } from "react";

export default function AutoLogin() {
  const { isLogged, setUser } = useUserStore();
  useEffect(() => {
    if (!isLogged) {
      const autoLogin = async () => {
        const response = await getUserAction();
        if (response.ok && response.data) {
          setUser(response.data);
        }
      };
      autoLogin();
    }
  }, [isLogged, setUser]);
  return null;
}
