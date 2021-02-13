import styled, { css, keyframes } from "styled-components";
const vw = window.innerWidth;
const calcSize = (size) => (size * vw) / 100;

export const FlexBox = styled.div`
  width: 100%;
  height: ${(props) => props.height || "100vh"};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.direction || "row"};
`;
export const H1 = styled.h1`
  font-size: ${(props) => props.size || "5.8vw"};
  font-weight: bold;
`;
export const H2 = styled.h2`
  font-size: 4vw;
  line-height: 130%;
`;
export const H3 = styled.h3`
  font-size: 3vw;
  line-height: 130%;
`;
export const H4 = styled.h4`
  font-size: 1.3vw;
  color: ${(props) =>
    props.reverse ? props.theme.colors.bgColor : props.theme.colors.color};
  line-height: 130%;
`;

export const A = styled.a`
  text-decoration: none;
`

export const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border || "none"};
  background: ${(props) =>
    props.reverse ? props.theme.colors.bgColor : props.theme.colors.color};
  color: ${(props) =>
    props.reverse ? props.theme.colors.color : props.theme.colors.bgColor};
  cursor: pointer;
`;

export const Circle = styled.div`
  position: absolute;
  overflow: hidden;
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.color};

  &&:hover {
    cursor: none;
  }
`;
export const Fadeout = keyframes`
    0%{
        opacity: 1;
        width: 0%;
        height: 0%;
    }
    25%{
        opacity: .75;
        width: 25%;
        height: 25%;
    }
    50%{
        opacity: .50;
        width: 50%;
        height: 50%;
    }
    75%{
        opacity: .25;
        width: 75%;
        height: 75%;
    }
    100%{
        opacity: 0;
        width: 100%;
        height: 100%;
    }
`;

export const RightToLeft = keyframes`
0% {
    left: 0;
  }
  25%{
      left: -25%; 
  }
  50%{
      left: -50%; 
  }
  75%{
      left: -75%; 
  }
  100% {
    left: -100%;
  }
`;
export const Gradient = keyframes`
	0%, 100% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
`;
export const Pulse = keyframes`
  0%, 35% {
    background: ${(props) => props.theme.colors.color};
    transform: scale(1);
  }
  20%, 50% {
    background: ${(props) => props.theme.colors.color};
    transform: scale(1.3);
  }
`;

export const Rotate = keyframes`
  0%{
    transform: rotate(0deg)
  }
  50%{
    transform: rotate(180deg)
  }
  100%{
    transform: rotate(360deg)
  }
`;
