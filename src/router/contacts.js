import React from "react";
import styled, { css } from "styled-components";
import { Gradient, FlexBox, H1, RightToLeft } from "../util/util";
import ContactBox from "../components/EmailBox";
import IconBox from '../components/IconBox'
import { text, contactsList } from '../util/texts'

const Wrapper = styled(FlexBox)`
  width: 100%;
  overflow: hidden;
  background: ${(props) => props.transparent ? 'transparent' : props.theme.colors.bgColor};
  justify-content: space-evenly;
  z-index: 5;
`;
const InputBox = styled(FlexBox)`
  width: 48%;
  height: 60%;
  flex-direction: column;
  justify-content: space-around;
  border-top: 1px solid ${(props) => props.theme.colors.color};
  border-bottom: 1px solid ${(props) => props.theme.colors.color};
`;
const TextBox = styled(FlexBox)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: hidden;
  white-space: nowrap;
  justify-content: space-between;
  align-content: center;

  position: ${(props) => props.position};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  transform: rotate(${(props) => props.rotate});

  z-index: ${(props) => props.index};
  background: ${(props) =>
    props.transparent ? "transparent" : props.theme.colors.bgColor};
  border-top: 1px solid ${(props) => props.theme.colors.color};
  border-bottom: 1px solid ${(props) => props.theme.colors.color};

  &:hover {
    background: linear-gradient(${props => props.theme.colors.gradient} );
    background-size: 300% 300%;
    animation: ${Gradient} 10s linear infinite;
    color: white;
  }

  ${(props) =>
    props.small &&
    css`
      &:hover {
        animation: none;
        cursor: none;
      }
    `}
`;
const M1 = styled(H1)`
  position: relative;
  animation: ${RightToLeft} 15s linear infinite;


  ${(props) =>
    props.small &&
    css`
      transform: rotate(180deg);
      animation: ${RightToLeft} 13s linear infinite;
    `}
`;
const contacts = () => {
  return (
    <FlexBox height="95vh">
      <Wrapper direction="column">
        <Wrapper transparent>
          <InputBox>
            <ContactBox />
          </InputBox>
          <InputBox>
          <FlexBox direction="column" height='100%'>
            {contactsList.map(contact => (
              < IconBox key={contact.name} props={contact} />
            ))}
            </FlexBox>
          </InputBox>
        </Wrapper>
        <TextBox height="13%">
          <M1>
            {text}
          </M1>
        </TextBox>
        <TextBox
          small
          transparent
          width="80%"
          height="3%"
          position="relative"
          bottom="7.5%"
          right="32%"
          rotate="205deg"
          index="-5"
        >
          <M1 small size="1.2vw">
            {text}
          </M1>
        </TextBox>
        <TextBox
          small
          width="100%"
          height="3%"
          position="relative"
          bottom="20%"
          right="-10%"
          rotate="150deg"
        >
          <M1 small size="1.2vw">
            {text}
          </M1>
        </TextBox>
      </Wrapper>
    </FlexBox>
  );
};
export default contacts;
