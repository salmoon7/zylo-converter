import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ConversionBox from "./components/ConversionBox";
import CompressionBox from "./components/CompressionBox";

function App() {
  return (
    <div className="font-body">
      <Hero />
      <ConversionBox />
      <CompressionBox />
    </div>
  );
}

export default App;
