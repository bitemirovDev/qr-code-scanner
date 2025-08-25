import type React from "react";
import { Sidebar } from "./components/Sidebar.tsx";
import { useEdgeDetector } from "./hooks/useEdgeDetector.tsx";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isOnEdge = useEdgeDetector(256, 10);
  return (
    <div className="flex flex-col min-h-screen min-w-screen justify-center items-center relative">
      <Sidebar isOnEdge={isOnEdge} />
      {children}
    </div>
  );
};

export { Layout };
