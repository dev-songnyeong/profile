import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

import { device } from '../util/theme'
import { Button, FlexBox } from "../util/util";

const Wrapper = styled(FlexBox)`
  width: 80%;
  height: 80%;
  
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputBox = styled(FlexBox)`
  width: 100%;
  height: ${(props) => (props.text ? "50%" : "10%")};
`;
const Lable = styled.label`
  width: 18%;
  margin-right: 2%;
  
  @media ${device.mobile}{
    display: none;
  }
`;

const Input = styled.input`
  width: 80%;
  height: 50%;
  border: 4px double ${(props) => props.theme.colors.color};
  background: ${(props) => props.theme.colors.bgColor};
  color: ${(props) => props.theme.colors.color};

  &:focus {
    outline: none;
    color: ${(props) => props.theme.colors.bgColor};
    background: ${(props) => props.theme.colors.color};
  }

  @media ${device.mobile}{
    width: 100%;
    margin-bottom: 5%;
  }
`;
const Textarea = styled.textarea`
  width: 80%;
  height: 88%;
  border: 4px double ${(props) => props.theme.colors.color};
  background: ${(props) => props.theme.colors.bgColor};
  color: ${(props) => props.theme.colors.color};
  font-size: 1.2rem;
  &:focus {
    outline: none;
    color: ${(props) => props.theme.colors.bgColor};
    background: ${(props) => props.theme.colors.color};
  }

  @media ${device.mobile}{
    width: 100%;
  }
`;
const SendButton = styled(Button)`
  width: 30%;
  height: 8%;
  margin-top: 5%;
  align-self: flex-end;

  @media ${device.mobile}{
    width: 100%;
    height: 13%;
    align-self: center;
  }
`;

const EmailBox = () => {
  let mobile = window.innerWidth <= 375;

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm('service_qk6f4g5', "template_z8pw4b6", e.target, "user_1LgA5aPHh9elSWy8A1hQC")
      .then(
        (result) => {
          alert(`Thank you! Looking forward to talk to you asap!`)
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset()
  }
  return (

    <>
      <Wrapper>
        <Form onSubmit={sendEmail}>
          <InputBox>
            <Lable>Name</Lable>
            <Input type="text" name="from_name" placeholder="your name" />
          </InputBox>
          <InputBox>
            <Lable>Email</Lable>
            <Input
              type="email"
              name="reply_to"
              placeholder="your E-mail address"
            />
          </InputBox>
          <InputBox text>
            <Lable>Message</Lable>
            <Textarea name="message" placeholder='projectName, duration...' />
          </InputBox>
          <SendButton onSubmit={sendEmail}>
            Send E-Mail
          </SendButton>
        </Form>
      </Wrapper>
    </>
  );
};

export default EmailBox;
