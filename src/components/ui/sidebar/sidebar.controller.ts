import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { VisibleSidebarContent } from "./types";
import { useClickOutside } from "@/hooks/useClickOutside";

export function useSideBarController() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [visibleSidebarContent, setVisibleSidebarContent] =
    useState<VisibleSidebarContent>("notification");
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsCollapsed(false);
  };

  const handleExpand = (content: VisibleSidebarContent) => {
    setVisibleSidebarContent(content);
    if (isCollapsed && visibleSidebarContent !== content) return;
    setIsCollapsed((p) => !p);
  };
  useClickOutside([contentRef, buttonsRef], handleClose);

  return {
    pathname,
    handleExpand,
    contentRef,
    buttonsRef,
    visibleSidebarContent,
    isCollapsed,
    handleClose,
  };
}
