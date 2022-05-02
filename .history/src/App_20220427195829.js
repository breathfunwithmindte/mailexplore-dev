import Header from "./components/Header";
import useMain from "./MainContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/primary/App.css";
import "./styles/primary/PageHeader.css";
import "./styles/primary/Reuseable.css";
import MainTemplate from "./pages/Main.template.jsx";
import SoloContentTemplate from "./pages/SoloContent.template";
import Emailpage from "./pages/EmailPage";

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
            <Route path="/" element={<MainTemplate><Emailpage /></MainTemplate>} />
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


