import React from 'react';
import styled from 'styled-components'
import { FlexBox } from '../util/util'

const Wrapper = styled(FlexBox)`
    width:100%;
    height: 100%;
    background: ${props => props.theme.colors.color}; 
    flex-wrap: wrap;
    overflow: hidden;
`
const LogoWrapper = styled(FlexBox)`
    width: 22%;
    height: 38%;
    flex-direction: column;
`

const LogoBox = styled.div`
    width: 90%;
    height: 60%;

`
const LogoImg = styled.img`
    width: 100%;
    height: 100%;

`
const TextBox = styled.div`
    width: 90%;
    height: 30%;
    color: white;
    text-align: center;
    word-break: keep-all;
`

const TechStack = ({ tech }) => {
    return (
        <>
            <Wrapper>
                {tech.map(name => (
                    <LogoWrapper key={name[0]}>
                        <LogoBox>
                            <LogoImg src={process.env.PUBLIC_URL + name[1]} />
                        </LogoBox>
                        <TextBox>{name[0]}</TextBox>
                    </LogoWrapper>
                ))}
            </Wrapper>

        </>
    );
};

export default TechStack;