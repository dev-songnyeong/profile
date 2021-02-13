import React from "react";
import styled from "styled-components";
import {Rotate} from '../util/util'

const SimpleArc = styled.div`
  position: absolute;
  bottom: -80%;
  left: 59%;
  display: block;
  width: 30vw;
  height: 30vw;
  transform-origin: center left;
animation: ${Rotate} 20s linear infinite
`;
const Span = styled.span`
  width: 1.2vw;
  height: 15vw;
  text-align: center;
  display: block;
  position: absolute;
  transform-origin: 50% 100%;
  white-space: pre;
  overflow: visible;
  padding: 0px;
  transform: rotate(${(props) => props.rad});
`;

const arc = () => {
  return (
    <>
      <SimpleArc>
        <Span rad="-90deg">S</Span>
        <Span rad="-86deg">O</Span>
        <Span rad="-82deg">N</Span>
        <Span rad="-78deg">G</Span>
        <Span rad="-74deg">N</Span>
        <Span rad="-70deg">Y</Span>
        <Span rad="-67deg">E</Span>
        <Span rad="-63.5deg">O</Span>
        <Span rad="-59.5deg">N</Span>
        <Span rad="-55.5deg">G</Span>
        <Span rad="-49deg">S</Span>
        <Span rad="-46deg">O</Span>
        <Span rad="-42deg">N</Span>
        <Span rad="-38deg">G</Span>
        <Span rad="-34deg">N</Span>
        <Span rad="-30.5deg">Y</Span>
        <Span rad="-27.5deg">E</Span>
        <Span rad="-24deg">O</Span>
        <Span rad="-20deg">N</Span>
        <Span rad="-16deg">G</Span>
        
        <Span rad="-10deg">S</Span>
        <Span rad="-6.5deg">O</Span>
        <Span rad="-2deg">N</Span>
        <Span rad="2deg">G</Span>
        <Span rad="6deg">N</Span>
        <Span rad="9.5deg">Y</Span>
        <Span rad="12.5deg">E</Span>
        <Span rad="16deg">O</Span>
        <Span rad="20deg">N</Span>
        <Span rad="24deg">G</Span>

        <Span rad="30deg">S</Span>
        <Span rad="33.5deg">O</Span>
        <Span rad="37.5deg">N</Span>
        <Span rad="41deg">G</Span>
        <Span rad="45deg">N</Span>
        <Span rad="48.5deg">Y</Span>
        <Span rad="51.5deg">E</Span>
        <Span rad="55deg">O</Span>
        <Span rad="59deg">N</Span>
        <Span rad="63deg">G</Span>

        <Span rad="69deg">S</Span>
        <Span rad="72.5deg">O</Span>
        <Span rad="76.5deg">N</Span>
        <Span rad="80.5deg">G</Span>
        <Span rad="84.5deg">N</Span>
        <Span rad="88deg">Y</Span>
        <Span rad="91deg">E</Span>
        <Span rad="94.5deg">O</Span>
        <Span rad="98.5deg">N</Span>
        <Span rad="102.5deg">G</Span>

        <Span rad="109deg">S</Span>
        <Span rad="112.5deg">O</Span>
        <Span rad="116.5deg">N</Span>
        <Span rad="120.5deg">G</Span>
        <Span rad="124.5deg">N</Span>
        <Span rad="128deg">Y</Span>
        <Span rad="131deg">E</Span>
        <Span rad="134.5deg">O</Span>
        <Span rad="138.5deg">N</Span>
        <Span rad="142.5deg">G</Span>

        <Span rad="149deg">S</Span>
        <Span rad="152.5deg">O</Span>
        <Span rad="156.5deg">N</Span>
        <Span rad="160.5deg">G</Span>
        <Span rad="164.5deg">N</Span>
        <Span rad="168deg">Y</Span>
        <Span rad="171.5deg">E</Span>
        <Span rad="175.5deg">O</Span>
        <Span rad="179.5deg">N</Span>
        <Span rad="183.5deg">G</Span>
      </SimpleArc>
    </>
  );
};

export default arc;
