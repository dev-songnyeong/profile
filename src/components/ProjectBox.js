import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Gradient, FlexBox, H3, H4, A } from "../util/util";
import TechStack from "./TechStack";

const ProjectBoxWrapper = styled(A)`
  width: 31%;
  height: 50%;
  padding: 0 2% 0 2%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme.colors.color};
  border-bottom: 1px solid ${(props) => props.theme.colors.color};
  margin-bottom: 10%;
  z-index: 5;

  &:hover {
    background: linear-gradient(${(props) => props.theme.colors.gradient});
    background-size: 300% 300%;
    animation: ${Gradient} 12s ease infinite;
    cursor: pointer;
  }
  &:link, &:visited{
  color: ${(props) => props.theme.colors.color};
  }
`;
const ImgBox = styled.div`
  width: 100%;
  height: 60%;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const TextBox = styled(FlexBox)`
  width: 100%;
  height: 40%;
  justify-content: center;
  align-items: center;
`;
const TitleBox = styled.div`
  width: 30%;
  height: 50%;
  margin-right: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.sub &&
    css`
      width: 75%;
      margin-right:0;
      text-align: left;
    `}

`
const ProjectBox = ({ props: { title, subTitle, tech, url, image} }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <>
      <ProjectBoxWrapper
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
        href={url}
        target={"_blank"}
      >
        <ImgBox>
        {isMouseOver ? <TechStack tech={tech} ></TechStack> : <Img src={process.env.PUBLIC_URL + image} alt={title}/>}
        </ImgBox>
        <TextBox>
          <TitleBox>
            <H3>{title}</H3>
          </TitleBox>
          <TitleBox sub>
            <H4>{subTitle}</H4>
          </TitleBox>
        </TextBox>
      </ProjectBoxWrapper>
    </>
  );
};

export default ProjectBox;
