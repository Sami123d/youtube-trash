import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import {
  Explore,
  ExploreOutlined,
  MenuOutlined,
  Padding,
} from "@mui/icons-material";
import SubscriptionsOutlined from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
const Container = styled.div`
  flex: 1;
  height: 100vh;
  position: sticky;
  top: 0;
  background-color: #202020;
  color: white;
  font-size: 12px;
`;
const Header = styled.div`
  margin-bottom: 25px;
  display: flex;
padding-top:0.8rem;
  justify-content: center;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 1px;
  border: 1px solid white;
  border-radius: 16px ;
`;

const SideMenu = () => {
  return (
    <Container>
      <Header>
        <MenuOutlined style={{ fontSize: "25px", cursor: "pointer" }} />
      </Header>
      <Item>
        <HomeIcon />
        Home
      </Item>

      <Item>
        <ExploreOutlined />
        Explore
      </Item>
      <Item>
        <SubscriptionsOutlined />
        Subscription
      </Item>
      <Item>
        <VideoLibraryOutlinedIcon />
        You
      </Item>
    </Container>
  );
};

export default SideMenu;
