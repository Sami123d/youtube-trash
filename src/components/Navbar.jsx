import { MenuOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import NavbarInput from "./NavbarInput";
import { Button } from "antd";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Container = styled.div`
height: 56px;
  position: sticky;
  top: 0;
  background-color: yellow;
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
height: 100%;
  display: flex;
align-items: center;
padding: 0px 20px;
  `;

const Navbar = ({ showDrawer }) => {
  return (
    <Container>
      <Wrapper>navbar</Wrapper>
    </Container>
  );
};

export default Navbar;

{
  /* <button type="primary" onClick={showDrawer}>
        Open
      </button> */
}
{
  /* <LeftNav>
          <ToggleSpan><MenuOutlined
            style={{  width: "30", height: "30", cursor: "pointer" }}
            onClick={showDrawer}
          /></ToggleSpan>
          <Logo className="yt-logo">
            <Img src="src/assets/logo.png" alt="" />
            YOUTUBE
          </Logo>
          
        </LeftNav>
        <MiddleNav><NavbarInput /></MiddleNav>
        <RightNav> <Button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginTop: "10px",
                fontWeight: "500",
                fontSize: "10px",
              }}
              type="primary"
              ghost
            >
              <AccountCircleOutlinedIcon style={{ fontSize: "18px" }} /> SIGN IN
            </Button></RightNav> */
}

//             const MiddleNav = styled.div`display: flex; justify-content: center; width: 60%`;
// const RightNav = styled.div` `;
// const Logo = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 3px;
//   font-weight: bold;
// `;
// const ToggleSpan = styled.span`

// `;
// const Img = styled.img`
//   height: 25px;
// `;

// const LeftNav = styled.div`

//  display: flex;
// justify-content: center;
// gap: 14px;`;
