import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import { darkTheme, lightTheme } from "./utils/Theme";

const Container = styled.div``;
const Main = styled.div`
  background-color: ${({theme})=>theme.bg};
`;
const MainWrap = styled.div``;
const Wrapper = styled.div``;

const App = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const [darkMode, setDarkMode] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (

    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>

      <Container>
      <Menu open={open} onClose={onClose} placement={placement} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main>
        <Navbar showDrawer={showDrawer} />
        <Wrapper>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
        </Wrapper>
      </Main>
    </Container>
    </ThemeProvider>
    
  );
};

export default App;
