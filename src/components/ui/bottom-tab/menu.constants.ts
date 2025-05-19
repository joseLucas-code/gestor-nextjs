import { Bell, Home, Shield, ShoppingCart, User } from "lucide-react";
import CartTabContent from "./cart-content";
import NotificationTabContent from "./notification-content";
import AdminContent from "./admin-content";
import ProfileContent from "./profile-content";

export const tabMenu = [
  {
    href: "/",
    icon: Home,
    path: "home",
    component: null,
  },
  {
    href: "#cart",
    icon: ShoppingCart,
    path: "cart",
    component: CartTabContent,
  },
  {
    href: "#notifications",
    icon: Bell,
    path: "notifications",
    component: NotificationTabContent,
  },
  {
    href: "#admin",
    icon: Shield,
    path: "admin",
    component: AdminContent,
  },
  {
    href: "#profile",
    icon: User,
    path: "profile",
    component: ProfileContent,
  },
];
