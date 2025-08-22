import { Routes, Route } from "react-router";
import { Layout } from "./Layout";
import { QrCodeGenerator } from "./components/QrCodeGenerator.tsx";
import { QrCodeScanner } from "./components/QrCodeScanner.tsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/scan" element={<QrCodeScanner />} />
      </Routes>
    </Layout>
  );
}

export default App;
