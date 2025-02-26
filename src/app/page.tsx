import Hero from "./components/Hero";

import ConversionBox from "./components/ConversionBox";
import CompressionBox from "./components/CompressionBox";
import FAQSection from "./components/FaqSection";
import WhatComing from "./components/FuturePlan";

function App() {
  return (
    <div className="font-body">
      <Hero />
      <ConversionBox />
      <CompressionBox />
      <FAQSection />
      <WhatComing />
    </div>
  );
}

export default App;
