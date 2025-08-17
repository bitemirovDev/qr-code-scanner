interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input = ({ onChange, fullWidth, error, ...props }: InputProps) => {
  return (
    <div className={fullWidth ? "w-full" : "w-auto"}>
      <input
        {...props}
        className="w-full border-1 border-blue-100 py-2 px-4 rounded-md outline-none focus:border-blue-500"
        type="text"
        onChange={onChange}
      />

      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export { Input };
