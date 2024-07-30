import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;
// img should be proper 
const Img = styled.img`
  width: 60%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{textDecoration: "none"}}>
      <Container type={type}>
        <Img type={type} src="data:image/jpeg;base64,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"></Img>
        <Details type={type}>
          {" "}
          <ChannelImage 
          type={type} 
           src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />{" "}
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Lama Dev</ChannelName>
            <Info>660,908 views • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
