import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  children: React.ReactNode;
}

const buttonVariants = {
  primary: "bg-blue-500 hover:bg-blue-700",
  secondary: "bg-gray-500 hover:bg-gray-700",
};

const Button = ({ onClick, variant, children }: ButtonProps) => {
  return (
    <button
      className={clsx(
        buttonVariants[variant],
        "text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform cursor-pointer"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
