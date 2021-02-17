import React, { useState } from "react";
import styled from "styled-components";

import { device } from '../util/theme'
import { FlexBox, H4 } from "../util/util";
import { eng, imageUrls } from "../util/texts";

const Wrapper = styled(FlexBox)`
  height: 100%;
  justify-content: flex-end;
  background: transparent;
  z-index: 10;

  @media ${device.mobile}{
    flex-direction: column;
  }
`;
const LogoBox = styled(FlexBox)`
  width: 35%;
  height: 100%;
  padding-top: 13.3%;
  align-items: flex-start;
  justify-content: center;

  @media ${device.mobile}{
    width: 0%;
    height: 0%;
  }
`;
const TextBox = styled.div`
  width: 35%;
  height: 100%;
  padding: 0 2.5% 0 2.5%;
  display: flex;
  align-items: center;
  text-align: justify;
  line-height: 100%;

  background: ${(props) => props.theme.colors.bgColor};
  border-top: 1px solid ${(props) => props.theme.colors.color};
  border-bottom: 1px solid ${(props) => props.theme.colors.color};

  @media ${device.mobile}{
    width: 78%;
    height: 30%;
  }
`;
const ImgBox = styled(FlexBox)`
  width: 30%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  background: no-repeat center/200% url(${(props) => props.url});
  border-top: 1px solid ${(props) => props.theme.colors.color};
  border-bottom: 1px solid ${(props) => props.theme.colors.color};

  @media ${device.mobile}{
    width: 83%;
    height: 70%;
    flex-direction: row;
    align-items:flex-end;
    background: no-repeat top/200% url(${(props) => props.url});
  }
`;
const Imgs = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  background: no-repeat center/cover url(${(props) => props.url});
  border: 10px ${props => props.theme.colors.color} solid;
  z-index: ${(props) => props.index};
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  @media ${device.mobile}{
    position: inherit;
  }
`;
const Introduction = styled.div`
position: relative;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 5px;
  word-wrap: break-word;
  background: ${props => props.theme.colors.color};
  color: ${props => props.theme.colors.bgColor};
  font-weight: bold;
`
const About = () => {
  let mobile = window.innerWidth <= 375;
  const [isMouseOver, setIsMouseOver] = useState(false)
  return (
    <FlexBox height={mobile? "100vh": "50vh"}>
      <Wrapper>
        <LogoBox>
          <H4 reverse>ABOUT</H4>
        </LogoBox>
        <ImgBox
          url={imageUrls.aboutMain}
          onMouseOver={() => (setIsMouseOver(true))}
          onMouseLeave={() => (setIsMouseOver(false))}>
          {!mobile &&( 
            <>
          <Imgs
            width="30%"
            height="30%"
            top="10%"
            left="-50%"
            url={imageUrls.aboutSub1}
          >
            {isMouseOver && <Introduction width='13%' height='75%' left='-33%' top='-6.5%'>DREAMER</Introduction>}
          </Imgs>
          <Imgs
            width="20%"
            height="23%"
            bottom="-42.3%"
            right="0%"
            index="10"
            url={imageUrls.aboutSub2}
          >
            {isMouseOver && <Introduction width='15%' height='104%' left='-45%' top='-7.2%'>CREATIVE</Introduction>}
          </Imgs>
          <Imgs
            width="50%"
            height="28%"
            bottom="-5%"
            right="-30%"
            url={imageUrls.aboutSub3}
            justify='flex-end'
            align='flex-end'
          >
            {isMouseOver && <Introduction width='52%' height='13%' left='4.7%' top='32%'>TEAM-PLAYER</Introduction>}
          </Imgs>
          </>)}
          {mobile &&(<> 
            <Imgs
            width="30%"
            height="20%"
            url={imageUrls.aboutSub1}
          >
          </Imgs>
          <Imgs
            width="30%"
            height="20%"
            url={imageUrls.aboutSub2}
          >
          </Imgs>
          <Imgs
            width="30%"
            height="20%"
            url={imageUrls.aboutSub3}
          >
          </Imgs>
          </>)}
        </ImgBox>
        <TextBox>
          <H4>{eng.about}</H4>
        </TextBox>
      </Wrapper>
    </FlexBox>
  );
};

export default About;
