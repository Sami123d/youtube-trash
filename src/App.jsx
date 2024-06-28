import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Update import statemen
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";

const Container = styled.div``;
const Main = styled.div`
  background-color: ${({ theme }) => theme.bg};
`;
const MainWrap = styled.div``;
const Wrapper = styled.div`padding: 22px 40px;`;

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
      <BrowserRouter>
        <Menu
          open={open}
          onClose={onClose}
          placement={placement}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Main>
          <Navbar showDrawer={showDrawer} />
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route  index element={<Home />}></Route>
                <Route path="signin" element={<SignIn />} />
                <Route path="video">
                  <Route path=":id" element={<Video />}></Route>
                </Route>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
