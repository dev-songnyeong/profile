import React from "react";
import styled from "styled-components";
import {Gradient} from '../util/util'

const LogoBox = styled.div`
  width: 17vw;
  height: 17vw;
  padding: 1vw;
  font-size: 4vw;
  border: 2.3vw solid ${(props) => props.theme.colors.color};
  z-index: 50;

  &:hover{
    background: linear-gradient(${(props) => props.theme.colors.gradient}) ;
    background-size: 300% 300%;
    animation: ${Gradient} 12s ease infinite;
    color: white;
  }
`;

const LetterBox = styled.div`
  width: 100%;
  height: 33.3%;
  display: flex;
  align-items: center;
`;
const logo = () => {
  return (
    <>
    <LogoBox>
      <LetterBox>SONG</LetterBox>
      <LetterBox>NYEONG</LetterBox>
      <LetterBox>NAM</LetterBox>
    </LogoBox>
  </>
  );
};

export default logo;
