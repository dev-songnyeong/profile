import React,{useState, useEffect} from "react";
import { ThemeProvider } from "styled-components";
import useWindows from "../hooks/useWindows";
import { theme1, theme2, theme3, theme4, theme5 } from "./theme";

const themeList = [theme1, theme2, theme3, theme4, theme5];

const ThemesProvider = ({ children }) => {
  const [number, setNumber] = useState(0);

    const getRandom = () => {
      let init = Math.floor(Math.random() * themeList.length);
      setNumber(init);
      return number;
    };

    useEffect(()=>{
      getRandom()
    },[])
    
    const [theme,setTheme] = useState(themeList[number]);

    const handleClick = () => {
      if (number === themeList.length - 1) {
        setNumber(0);
      } else {
        setNumber(number+1)
      }
      setTheme(themeList[number])
    };
  return (
    <>
      <ThemeProvider theme={theme}>
        {children}
        {useWindows('click',handleClick)}
      </ThemeProvider>
    </>
  );
};

export default ThemesProvider;
