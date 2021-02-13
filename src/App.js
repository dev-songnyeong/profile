import React from "react";
import Home from "./router/home";
import { createGlobalStyle } from "styled-components";

import Navbar from "./components/Navbar";
import About from "./router/About";
import Projects from "./router/projects";
import Contacts from "./router/contacts";

import Router from "./router/index";
import ThemeProvider from "./util/ThemesProvider";

const GlobalStyle = createGlobalStyle`
    body{
        width: 100%;
        height: 100vh;
        background: ${(props) => props.theme.colors.bgColor};
        color: ${(props) => props.theme.colors.color};
        ::-webkit-scrollbar {
            width: 1vw;
            box-shadow: inset 0 0 4px ${(props) => props.theme.colors.color};
        }
        ::-webkit-scrollbar-thumb {
          background: ${(props) => props.theme.colors.color};
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #b30000; 
        }
        /* font-family: 'Roboto Slab', serif; */
    }
`;
//mouseclick event??

function App() {
  return (
    <>
        <ThemeProvider>
          <Router />
          <GlobalStyle />
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Contacts />
        </ThemeProvider>
    </>
  );
}

export default App;
