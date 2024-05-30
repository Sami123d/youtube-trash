import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
const Container = styled.div``;
const Main = styled.div``;

const Wrapper = styled.div``;
const App = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <Container>
      <Menu open={open} onClose={onClose} placement={placement} />
      <Main>
        <Navbar showDrawer={showDrawer} />
        <Wrapper>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
        </Wrapper>
      </Main>
    </Container>
  );
};

export default App;
