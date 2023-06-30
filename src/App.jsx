import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LayoutGPT from "./components/GPT/LayoutGPT";
import Footer from "./components/Footer";


function App() {
  const [text, setText] = React.useState("");
  const [paraData, setParaData] = React.useState();

  return (
    <div className="bg-[#212A3E] flex flex-col w-full h-screen">
      <Navbar text={text} setText={setText} />
      <div className="flex justify-center items-center flex-col font-default text-white">
        <h1 className="font-bold text-[3em] mb-0">VAKYA AI</h1>
        <p className="mt-0">Text Utility</p>
      </div>
      <LayoutGPT text={text} setText={setText} />
      <Footer />
    </div>
  );
}

export default App;
