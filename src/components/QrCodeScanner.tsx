import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import type {
  IDetectedBarcode,
  IScannerComponents,
  IScannerStyles,
} from "@yudiel/react-qr-scanner";

import { SCAN_DATA } from "../constants";

const styles: IScannerStyles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: "100%",
  },
};

const settings: IScannerComponents = {
  finder: true,
  onOff: true,
  zoom: true,
};

const QrCodeScanner = () => {
  const [result, setResult] = useState<IDetectedBarcode[] | null>(null);

  const handleScan = (result: IDetectedBarcode[]) => {
    setResult(result);

    // Save scanned data to local storage
    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    );
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8 border-2 border-gray-300 rounded-lg md:w-120 sm:w-100 w-full">
      <Scanner
        onScan={(result) => handleScan(result)}
        allowMultiple
        styles={styles}
        components={settings}
      />
      <span>{result !== null && result[0].rawValue}</span>
    </div>
  );
};

export { QrCodeScanner };
