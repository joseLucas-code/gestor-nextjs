import { useState } from "react";

export function useBottomTabController() {
  const [activePath, setActivePath] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (path: string) => {
    setActivePath(path);
    if (path !== "home") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const closePanel = () => {
    setIsOpen(false);
    setActivePath("home");
  };

  return {
    activePath,
    isOpen,
    handleTabClick,
    closePanel,
  };
}
