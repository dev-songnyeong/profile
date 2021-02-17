import React from "react";
import styled, { css } from "styled-components";

import { device } from '../util/theme'
import { H4, A } from '../util/util'
const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6%;
  display: flex;
  justify-content: flex-end;
  border-bottom: ${props => props.theme.colors.color} 1px dotted;
  background: ${props => props.theme.colors.bgColor};
  z-index: 100;
`;

const UL = styled.ul`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${props => props.inspire && css`
    width: 68%;
    height: 100%;
    justify-content: flex-start;
    padding-rignt: 2%;
  `}
`;

const Download = styled(A)`
  width: 40%;
  height: 65%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background: ${(props) => props.theme.colors.color};
  color: ${(props) => props.theme.colors.bgColor};
  cursor: pointer;

  @media ${device.mobile}{
    width: 70%;
  }
`


const Navbar = () => {

  return (
    <>
      <NavbarWrapper>
        <UL inspire>
          <H4>
        inspired by 5scontent.com
        </H4>
        </UL>
        <UL>
          <Download href='/imgs/CV_Songnyeong.Nam.pdf' download='cv_SongnyeongNam'>
            <H4 reverse>Download CV</H4>
          </Download>
        </UL>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;

{/* <a href="/images/myw3schoolsimage.jpg" download>
  <img src="/images/myw3schoolsimage.jpg" alt="W3Schools">
</a> */}