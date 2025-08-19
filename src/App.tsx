import { Layout } from "./Layout";
import { QrCodeGenerator } from "./components/QrCodeGenerator";
import { QrCodeScanner } from "./components/QrCodeScanner";

function App() {
  return (
    <Layout>
      <QrCodeGenerator />
      <QrCodeScanner />
    </Layout>
  );
}

export default App;
