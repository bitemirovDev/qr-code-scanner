import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

const QrCodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState("");

  const handleClick = () => {
    if (!inputValue.trim()) {
      alert("Please enter a value to generate a QR code.");
      return;
    }
    setQrCodeValue(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <QRCodeSVG value={qrCodeValue} />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" onClick={handleClick}>
        Generate QR
      </button>
    </div>
  );
};

export { QrCodeGenerator };
