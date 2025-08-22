import { NavLink } from "./NavLink";

const routes = [
  { to: "/generate", title: "Generate QR-code" },
  { to: "/scan", title: "Scan QR-code" },
  { to: "/scan/history", title: "Scanned QR-codes" },
  { to: "/generate/history", title: "Generated QR-codes" },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-8 p-8 absolute top-0 left-0 bg-blue-300 min-h-full in-[&>*]:text-white in-[&>*]:font-bold in-[&>*]:hover:text-blue-300">
      {routes.map((route) => (
        <NavLink key={route.to} to={route.to} title={route.title} />
      ))}
    </div>
  );
};

export { Sidebar };
