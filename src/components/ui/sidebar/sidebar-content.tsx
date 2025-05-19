import { SideBarContentProps } from "./types";
import SideBarCartContent from "./sidebar-cart";
import SideBarNotificationContent from "./sidebar-notification";
import { X } from "lucide-react";
import { Button } from "../button";
import { forwardRef } from "react";

export const SideBarContent = forwardRef<HTMLDivElement, SideBarContentProps>(
  ({ isCollapsed, content, onClose }, ref) => {
    return (
      <div
        ref={ref}
        data-collapsed={isCollapsed}
        className="bg-sidebar shadow-ring fixed top-0 -left-full z-10 hidden h-full w-60 flex-col gap-2 p-2 shadow-sm transition-all data-[collapsed=true]:left-14 lg:flex"
      >
        <div className="flex justify-end">
          <Button variant="outline" onClick={onClose}>
            <X />
          </Button>
        </div>
        {content === "cart" && <SideBarCartContent />}
        {content === "notification" && <SideBarNotificationContent />}
      </div>
    );
  },
);

SideBarContent.displayName = "SideBarContent";
