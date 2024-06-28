import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Drawer, Button, Space } from "antd";
import { MenuOutlined, HomeFilled, CompassOutlined } from "@ant-design/icons";
import styled from "styled-components";
const Container = styled.div`
  background-color: ${({theme})=>theme.bgLighter};
  color: ${({theme})=>theme.text};
  font-size: 14px;
`;

const Wrapper = styled.div`
  padding: 1rem 0.6rem;
`;

const Header = styled.div`
  margin-bottom: 25px;
  display: flex;
  gap: 25px;
  padding-left: 10px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-weight: bold;
`;
const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  gap: 20px;
  cursor: pointer;
  padding: 10px;
  alignItems: center,
  border-radius: 10px;
  
   &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.1px solid ${({theme})=>theme.soft};
`;

const Login = styled.div``;
const Menu = ({ open, onClose, placement, darkMode, setDarkMode }) => {
  const handleToggleDrawer = () => {
    onClose(); // Close the drawer when toggle is clicked
  };

  const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 20px;
  `;
  return (
    <Drawer
      placement={placement}
      padding={0}
      width={200}
      onClose={onClose}
      open={open} // Use 'open' instead of 'visible'
      closable={false}
    >
      <Container>
        <Wrapper>
          {" "}
          <Header>
            <MenuOutlined
              style={{ height: "30px", cursor: "pointer" }}
              onClick={handleToggleDrawer}
            />
            <Logo className="yt-logo">
              <Img src="src/assets/logo.png" alt="" />
              YOUTUBE
            </Logo>
          </Header>
          <Item>
            <HomeIcon />
            Home
          </Item>
          <Item>
            <ExploreOutlinedIcon />
            Explore
          </Item>
          <Item>
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </Item>
          <Hr />
          <Item>
            <VideoLibraryOutlinedIcon />
            Library
          </Item>
          <Item>
            <HistoryOutlinedIcon />
            History
          </Item>
          <Hr />
          <Login>
            Sign in to like videos, comment, and subscribe.
            <Button
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
            </Button>
          </Login>
          <Hr />
          <Title>BEST OF LAMATUBE</Title>
          <Item>
            <LibraryMusicOutlinedIcon />
            Music
          </Item>
          <Item>
            <SportsBasketballOutlinedIcon />
            Sports
          </Item>
          <Item>
            <SportsEsportsOutlinedIcon />
            Gaming
          </Item>
          <Item>
            <MovieOutlinedIcon />
            Movies
          </Item>
          <Item>
            <ArticleOutlinedIcon />
            News
          </Item>
          <Item>
            <LiveTvOutlinedIcon />
            Live
          </Item>
          <Hr />
          <Item>
            <SettingsOutlinedIcon />
            Settings
          </Item>
          <Item>
            <FlagOutlinedIcon />
            Report
          </Item>
          <Item>
            <HelpOutlineOutlinedIcon />
            Help
          </Item>
          <Hr />
          <Item onClick={() => setDarkMode(!darkMode)}><SettingsBrightnessOutlinedIcon/> {darkMode ? "Light" : "Dark"} Mode</Item>
        </Wrapper>
      </Container>
    </Drawer>
  );
};

export default Menu;
