import React, { useMemo } from "react";
import { Button } from "../button";
import { X } from "lucide-react";
import { BottomTabContentProps } from "./types";
import { tabMenu } from "./menu.constants";

export default function BottomTabContent({
  onClose,
  activePath,
}: BottomTabContentProps) {
  const activeTab = useMemo(
    () => tabMenu.find((tab) => tab.path === activePath),
    [activePath],
  );
  if (!activeTab) return null;
  return (
    <div className="bg-background fixed inset-0 z-10 overflow-y-auto p-2 lg:hidden">
      <Button variant="outline" className="sticky top-0" onClick={onClose}>
        <X />
      </Button>

      <div className="pt-3">
        {activeTab.component !== null && <activeTab.component />}
      </div>
    </div>
  );
}
