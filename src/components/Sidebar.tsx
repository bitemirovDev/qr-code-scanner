import { NavLink } from "./NavLink";
import clsx from "clsx";
import LeftArrowIcon from "@public/icons/left_arrow_icon.svg?react";

const routes = [
  { to: "/generate", title: "Generate QR-code" },
  { to: "/scan", title: "Scan QR-code" },
  { to: "/scan/history", title: "Scanned QR-codes" },
  { to: "/generate/history", title: "Generated QR-codes" },
];

const Sidebar = ({ isOnEdge }: { isOnEdge: boolean }) => {
  return (
    <div
      className={clsx(
        !isOnEdge ? "-left-64" : "left-0",
        "flex flex-col gap-8 p-8 absolute top-0 w-64 duration-200 ease-in-out bg-blue-300 min-h-full in-[&>*]:text-white in-[&>*]:font-bold in-[&>*]:hover:text-blue-300"
      )}
    >
      <div className="flex flex-col gap-8 duration-200 ease-in-out in-[&>*]:text-white in-[&>*]:font-bold in-[&>*]:hover:text-blue-300">
        {routes.map((route) => (
          <NavLink key={route.to} to={route.to} title={route.title} />
        ))}
      </div>

      <button
        className={clsx(
          isOnEdge ? "hidden" : "",
          "absolute -right-18 top-1/2 text-blue-300 transform -rotate-90 text-bold flex flex-col items-center"
        )}
      >
        <LeftArrowIcon
          width={24}
          height={24}
          className="text-blue-300 -rotate-270 animate-bounce-x"
          color="currentColor"
        />
        Open menu
      </button>
    </div>
  );
};

export { Sidebar };
