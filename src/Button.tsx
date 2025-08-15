type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ onClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick}>Generate</button>
    </div>
  );
};

export { Button };
