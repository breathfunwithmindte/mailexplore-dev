import { createContext, useContext, useState, useEffect } from "react"
const mainContext = createContext();

export const ContextProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(new Object());

  useEffect(() => {
    setTimeout(() => {
      setState(pr =>{ return { user: {username: "Mike"} }})
      setLoading(false);
    }, 222)
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

function createStyle ()
{
  return {
    width: "50vw", 
    background: "red", "--bg0": "yellow",
    "--width": "20%"
  }
}