import React from "react";
import styled from "styled-components";
import { Pulse } from "../util/util";

const Element = styled.div`
  animation: ${Pulse} 1s linear ;
  background: #4DB6AC;
  border-radius: 100%;
  width: 3em;
  height: 3em;
`;

const clickEffect = () => {
  let x = window.pageXOffset();
  let y = window.pageYOffset();
  const handleClickEffect = () => {};
  return <>
    console.log(w, y)
  </>;
};

export default clickEffect;
