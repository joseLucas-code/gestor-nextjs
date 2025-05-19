"use client";

import Link from "next/link";
import { tabMenu } from "./menu.constants";
import BottomTabContent from "./bottom-tab-content";
import { useBottomTabController } from "./bottom_tab.controller";

export default function BottomTabs() {
  const { activePath, closePanel, handleTabClick, isOpen } =
    useBottomTabController();
  return (
    <>
      <div className="border-border fixed bottom-2 left-1/2 z-20 -translate-x-1/2 rounded-md border px-5 py-1 lg:hidden">
        <div className="bg-card/10 flex items-center gap-4 backdrop-blur-md">
          {tabMenu.map((menu, index) => (
            <Link
              key={index}
              href={menu.href}
              data-path={menu.path === activePath}
              className="data-[path=true]:bg-tabs-active rounded-md p-2"
              onClick={() => handleTabClick(menu.path)}
            >
              <menu.icon
                data-path={menu.path === activePath}
                className="data-[path=true]:text-tabs-active-foreground"
              />
            </Link>
          ))}
        </div>
      </div>

      {isOpen && (
        <BottomTabContent onClose={closePanel} activePath={activePath} />
      )}
    </>
  );
}
