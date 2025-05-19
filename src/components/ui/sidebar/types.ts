export type SideBarContentProps = {
  isCollapsed: boolean;
  content: VisibleSidebarContent;
  onClose: () => void;
};

export type VisibleSidebarContent = "notification" | "cart";
