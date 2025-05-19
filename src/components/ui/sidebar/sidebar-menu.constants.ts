import {
  faChartSimple,
  faDatabase,
  faHome,
  faImages,
  faList,
  faPhone,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

export const sidebarMenu = [
  {
    href: "/",
    name: "Inicio",
    icon: faHome,
  },
  {
    href: "/gallery",
    name: "Galeria",
    icon: faImages,
  },
  {
    href: "/contact",
    name: "Contato",
    icon: faPhone,
  },
  {
    href: "/help",
    name: "Central de Ajuda",
    icon: faQuestionCircle,
  },
];

export const sidebarAdminMenu = [
  {
    href: "/admin/dashboard",
    name: "Dashboard",
    icon: faChartSimple,
  },
  {
    href: "/admin/services",
    name: "Serviços",
    icon: faDatabase,
  },
  {
    href: "/admin/manage",
    name: "Gerenciar",
    icon: faList,
  },
  {
    href: "/admin/management",
    name: "Gestão de atendimentos",
    icon: faQuestionCircle,
  },
];
