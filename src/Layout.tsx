import type React from "react";
import { Sidebar } from "./components/Sidebar.tsx";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen justify-center items-center relative">
      <Sidebar />
      {children}
    </div>
  );
};

export { Layout };
