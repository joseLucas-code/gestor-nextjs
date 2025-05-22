"use client";

import { Codesandbox } from "lucide-react";
import { Button } from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sidebarAdminMenu, sidebarMenu } from "./sidebar-menu.constants";
import { faBell, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { SideBarContent } from "./sidebar-content";
import { useSideBarController } from "./sidebar.controller";

export default function SideBar() {
  const {
    buttonsRef,
    contentRef,
    handleExpand,
    pathname,
    visibleSidebarContent,
    isCollapsed,
    handleClose,
  } = useSideBarController();

  return (
    <>
      <aside
        data-collapsed={isCollapsed}
        className="bg-sidebar shadow-sidebar-ring relative z-20 hidden w-14 flex-col gap-5 px-2 py-3 shadow-sm transition-[width] duration-100 data-[collapsed=false]:w-56 data-[collapsed=false]:px-3 lg:flex"
      >
        {/* Header */}
        <div
          data-collapsed={isCollapsed}
          className="flex h-4 items-center justify-center gap-2 data-[collapsed=false]:justify-start data-[collapsed=false]:pl-3"
        >
          <Codesandbox />
          {!isCollapsed && <h2 className="text-2xl font-bold">Gestor</h2>}
        </div>

        {/* Public pages */}
        <div className="flex flex-1 flex-col gap-2">
          {sidebarMenu.map((menu, index) => (
            <Button
              variant={
                !isCollapsed && pathname === menu.href ? "default" : "ghost"
              }
              key={index}
              data-collapsed={isCollapsed}
              className="justify-center data-[collapsed=false]:justify-start"
            >
              <FontAwesomeIcon icon={menu.icon} className="size-5" />
              {!isCollapsed && menu.name}
            </Button>
          ))}

          {/* Panel */}
          <div className="flex flex-1 flex-col gap-2">
            <span
              data-collapsed={isCollapsed}
              className="text-muted-foreground text-sm whitespace-nowrap opacity-0 select-none data-[collapsed=false]:opacity-100 data-[collapsed=false]:select-auto"
            >
              Painel de admin
            </span>

            {sidebarAdminMenu.map((menu, index) => (
              <Button
                variant={
                  !isCollapsed && pathname === menu.href ? "default" : "ghost"
                }
                key={index}
                data-collapsed={isCollapsed}
                className="justify-center data-[collapsed=false]:justify-start"
              >
                <FontAwesomeIcon icon={menu.icon} className="size-5" />
                {!isCollapsed && menu.name}
              </Button>
            ))}
          </div>

          {/* Footer */}
          <div>
            <div ref={buttonsRef} className="flex flex-col gap-2">
              <Button
                data-collapsed={isCollapsed}
                className="justify-center data-[collapsed=false]:justify-start"
                variant={
                  isCollapsed && visibleSidebarContent === "cart"
                    ? "default"
                    : "ghost"
                }
                onClick={() => handleExpand("cart")}
              >
                <FontAwesomeIcon icon={faCartShopping} className="size-5" />
                {!isCollapsed && "Carrinho"}
              </Button>
              <Button
                data-collapsed={isCollapsed}
                className="justify-center data-[collapsed=false]:justify-start"
                variant={
                  isCollapsed && visibleSidebarContent === "notification"
                    ? "default"
                    : "ghost"
                }
                onClick={() => handleExpand("notification")}
              >
                <FontAwesomeIcon icon={faBell} className="size-5" />

                {!isCollapsed && "Notificações"}
              </Button>
            </div>
            {!isCollapsed && (
              <div className="border-border hover:bg-accent hover:text-accent-foreground mt-4 rounded-md border p-3">
                <Link href="/auth" className="flex justify-center">
                  <span className="text-base font-medium">
                    Login / Cadastro
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </aside>

      <SideBarContent
        isCollapsed={isCollapsed}
        content={visibleSidebarContent}
        onClose={handleClose}
        ref={contentRef}
      />
    </>
  );
}
