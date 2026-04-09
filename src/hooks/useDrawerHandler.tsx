import { useEffect, useState } from "react";

export default function useDrawerHandler() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isOpen, setIsOpen };
}
