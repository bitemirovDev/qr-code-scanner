type InputProps = {
  onChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
};

const Input = ({ onChange }: InputProps) => {
  return (
    <div>
      <input type="text" onChange={onChange} />
    </div>
  );
};

export { Input };
