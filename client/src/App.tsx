import React, { useEffect } from "react";
import Buttons from "./components/Inputs/Buttons/Buttons";
import Home from "./components/Routes/Home/Home";
import { mediaContext } from "./common/Contexts/mediaContext";
import { useMediaQuery } from "react-responsive";
import Header from "./components/sticky/Header/Header";
import { GlobalStyle } from "./Global.styles";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 950px)" });

  return (
    <mediaContext.Provider value={{ isMobile, isTablet }}>
      <GlobalStyle />

      <div className="App">
        <Header />
        <Home />
      </div>
    </mediaContext.Provider>
  );
}

export default App;
