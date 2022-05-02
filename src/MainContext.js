import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { createContext, useContext, useState, useEffect } from "react"
import Request from "./bssl/Request";
import Compose from "./components/Compose";

const mainContext = createContext();

export const ContextProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState({});
  const [emails, setEmails] = useState([]);
  const [mui_theme, set_mui_theme] = useState(createTheme());
  const [open_compose, setOpencompose] = useState(true);

  useEffect(() => {
    (async () => {
      await Request.get("autheticated", null, async (error, data) => {
        if(error) { /** do smth with the error */ return; }
        console.log(data)
        setLoading(false);
        setState(data);
        set_mui_theme(createTheme({
          palette: {
            mode: "dark",
            primary: { main: data.project.theme.pr, dark: data.project.theme.pr1, contrastText: data.project.theme.pclr },
            secondary: { main: "#ff9800", dark: "#fb8c00", contrastText: "#fff" }
          }
        }))
      })
    })();
    return () => {
    };
  }, []);

  if(loading) return <p>loading...</p>
  return (
    <mainContext.Provider value={{state: state, emails, setEmails, open_compose, setOpencompose}}>
      <ThemeProvider theme={mui_theme}>
        {
          state.user ? <div className="App" style={createStyle(state.project.theme)}>
            {children}
            {open_compose && (<Compose />)}
          </div> : <p>login</p>
        }
      </ThemeProvider>
    </mainContext.Provider>
  )
}

export default function useMain () {
  const smth = useContext(mainContext);
  return smth;
}

function createStyle(style) {
  let obj = {};

  for (const key in style) {
    if (Object.hasOwnProperty.call(style, key)) {
      obj[`--${key}`] = style[key];
    }
  }

  return obj;
}