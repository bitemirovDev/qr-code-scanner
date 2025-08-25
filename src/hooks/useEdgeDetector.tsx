import { useEffect, useState } from "react";

export const useEdgeDetector = (sidebarWidth = 256, threshold = 10) => {
  const [isOnEdge, setIsOnEdge] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientX <= threshold || e.clientX <= sidebarWidth) {
        setIsOnEdge(true);
      } else {
        setIsOnEdge(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [sidebarWidth, threshold]);

  return isOnEdge;
};
