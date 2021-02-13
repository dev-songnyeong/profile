import React from 'react';
import styled from 'styled-components'
import { FlexBox, H4 } from '../util/util'

const Wrapper = styled(FlexBox)`
    width:94%;
    height: 100%;
    background: ${props => props.theme.colors.color}; 
    /* opacity: 0.5; */
    flex-wrap: wrap;
    padding: 0 3% 0 3%;
    justify-content: space-evenly;
`
const LogoWrapper = styled(FlexBox)`
    width: 25%;
    height: 30%;
    flex-direction: column;
    opacity: 1;
`
const LogoBox = styled.img`
    width: 90%;
    height: 80%;
`
const TextBox = styled.div`
    width: 90%;
    height: 20%;
    color: white;
    text-align: center;
`

const TechStack = ({ tech }) => {
    return (
        <>
            <FlexBox width='100%' height='70%'>
                <Wrapper>
                    {tech.map(name => (
                        <LogoWrapper key={name[1]}>
                            <LogoBox src={name[1]}/>
                            <TextBox>{name[0]}</TextBox>
                        </LogoWrapper>
                    ))}
                    {/* <H4 reverse style={{opacity: '1'}}>{tech}</H4> */}
                </Wrapper>
            </FlexBox>

        </>
    );
};

export default TechStack;