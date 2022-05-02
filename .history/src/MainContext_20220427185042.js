import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { createContext, useContext, useState, useEffect } from "react"
const mainContext = createContext();

const style = {
  bg0: "#18191A",
  bg1: "#242428",
  bg2: "#45494E",
  clr: "#FFFFFF",
  clr1: "#E4E6D8",
  clr2: "#B8BBBF",
  h: "rgba(0,0,0,0.14)",
  hl: "rgba(255, 255, 255, 0.14)",
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

export const ContextProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(new Object());
  const [mui_theme, set_mui_theme] = useState(createTheme())

  useEffect(() => {
    setState(pr => {
      return {
        user: { username: "Mike" },
        project: { theme: { dark: style } }
      };
    });
    setTimeout(() => {
      set_mui_theme(createTheme({
        palette: {
          mode: "dark",
          primary: { main: style.pr, dark: style.pr1, contrastText: style.pclr }
        }
      }));
    }, 1000);
    setLoading(false);
    return () => {
    };
  }, []);

  if(loading) return <p>loading...</p>
  return (
    <mainContext.Provider value={state}>
      <ThemeProvider theme={mui_theme}>
        {
          state.user ? <div className="App" style={createStyle(state.project.theme.dark)}>{children}</div> : <p>login</p>
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