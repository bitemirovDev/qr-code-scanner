import type React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      {children}
    </div>
  );
};

export { Layout };
