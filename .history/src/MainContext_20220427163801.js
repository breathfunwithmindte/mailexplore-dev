import { createContext, useContext, useState, useEffect } from "react"
const mainContext = createContext();

export const ContextProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(new Object());

  useEffect(() => {
    setState(pr => {
      return {
        user: {
          username: "Mike"
        },
        project: {
          theme: {
            dark: style
          }
        }
      };
    });
    setTimeout(() => {
      set_mui_theme((0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["default"])({
        palette: {
          mode: "dark",
          primary: {
            main: style.pr,
            dark: style.pr1,
            contrastText: style.pclr
          }
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
      {
        state.user ? <div className="App" style={createStyle()}>{children}</div> : <p>login</p>
      }
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