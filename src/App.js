import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import "./styles/primary/App.css";
import "./styles/primary/PageHeader.css";
import "./styles/primary/Reuseable.css";
import "./styles/primary/Compose.css";
import MainTemplate from "./pages/Main.template.jsx";
import SoloContentTemplate from "./pages/SoloContent.template";
import Emailpage from "./pages/EmailPage";
import SettingTemplate from "./pages/Setting.template";
import { Categories, Users } from "./pages/settings";

function App() {

  return (
    <div className="App-in">
        <Header />
          {/* primary template like email lists - or single email */}
          <Routes>
            <Route path="/" element={<MainTemplate><Emailpage /></MainTemplate>} />
            <Route path="/email/:currentpage" element={<MainTemplate><Emailpage /></MainTemplate>} />
            <Route path="/settings" element={<SettingTemplate><Users /></SettingTemplate>} />
            <Route path="/settings/primary/categories" element={<SettingTemplate><Categories /></SettingTemplate>} />
            <Route path="/settings/primary/rules-search" element={<SettingTemplate><Users /></SettingTemplate>} />
            <Route path="/settings/actions/get-started" element={<SettingTemplate><Users /></SettingTemplate>} />
            <Route path="/settings/actions/list" element={<SettingTemplate><Users /></SettingTemplate>} />
            <Route path="/settings/actions/per-item" element={<SettingTemplate><Users /></SettingTemplate>} />
            <Route path="/settings/authetication/users" element={<SettingTemplate><Users /></SettingTemplate>} />
            <Route path="/settings/authetication/roles" element={<SettingTemplate><Users /></SettingTemplate>} />
            <Route path="/settings/authetication/users/new" element={<SettingTemplate><Users /></SettingTemplate>} />
            <Route path="/*" element={<SoloContentTemplate>
              <div style={{padding: "var(--p)", display: "flex", "justifyContent": "center", width: "100%"}}>
                <h1>Page not found | 404</h1>
              </div>
            </SoloContentTemplate>} />
          </Routes>
    </div>
  );
}

export default App;


