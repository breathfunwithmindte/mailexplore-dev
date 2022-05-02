import Header from "./components/Header";
import useMain from "./MainContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/primary/App.css";
import "./styles/primary/PageHeader.css";
import "./styles/primary/Reuseable.css";
import MainTemplate from "./pages/Main.template";
import SoloContentTemplate from "./pages/SoloContent.template";

function App() {
  const { user } = useMain();

  const Appp = () => <MainTemplate><div>Gello wolrd app</div></MainTemplate>
  const Appp1 = () => <MainTemplate><div>Gello wolrd app 111</div></MainTemplate>
  const Appp2 = () => <SoloContentTemplate><div>Gello wolrd app 111 2222</div></SoloContentTemplate>

  return (
    <div className="App-in">
      <Header />

          {/* primary template like email lists - or single email */}
          <Routes>
            <Route path="/" element={<Appp />} />
            <Route path="/1" element={<Appp1 />} />
          </Routes>
          {/* solo contents - like compose new email */}
          <Routes>
            <Route path="/2" element={<Appp2 />} />
          </Routes>
    </div>
  );
}

export default App;


const style = {
  bg0: "#1E1E1E",
  bg1: "#242428",
  bg2: "#45494E",
  clr: "#FFFFFF",
  clr1: "#E4E6D8",
  clr2: "#B8BBBF",
  h: "rgba(0,0,0,0.14)",
  s: "",
  bclr: "rgba(0,0,0,0.86)",
  bclr1: "#45494E",
  p: "1.14rem",
  p1: "0.69rem",
  p2: "0.24rem",
  m: "0.69rem",
  m1: "0.14rem",
  pr: "#0A493A",
  pr1: "#09735A",
  pr2: "",
  pclr: "#FFFFFF",
  wpg: "calc(100vw - var(--whd))",
  whd: "297px"
};