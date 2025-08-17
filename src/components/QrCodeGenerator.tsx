import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

const QrCodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState("Hello from QR-code Scanner");
  const [error, setError] = useState("");

  const handleClick = () => {
    if (!inputValue.trim()) {
      setError("Please enter a value to generate a QR code.");
      return;
    }
    setQrCodeValue(inputValue);
    setInputValue("");
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8 border-2 border-gray-300 rounded-lg md:w-120 sm:w-100 w-full">
      <QRCodeSVG value={qrCodeValue} width={"100%"} height={"100%"} />
      <div className="flex flex-col gap-4 w-full">
        <Input
          value={inputValue}
          placeholder="Enter text to generate QR code"
          fullWidth
          error={error}
          onChange={onChangeHandler}
        />

        <Button variant="primary" onClick={handleClick}>
          Generate QR
        </Button>
      </div>
    </div>
  );
};

export { QrCodeGenerator };
