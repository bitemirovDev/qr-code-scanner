import { Link } from "react-router";

const NavLink = ({ to, title }: { to: string; title: string }) => {
  return (
    <Link
      className="text-white cursor-pointer duration-300 ease-in-out hover:text-blue-500"
      to={to}
    >
      {title}
    </Link>
  );
};

export { NavLink };
