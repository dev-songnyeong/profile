import React from 'react';
import styled from 'styled-components'

import Logo from '../components/logo'
import Arc from '../components/arc'
import {eng} from '../util/texts'
import { Circle, FlexBox, H1 } from '../util/util'
import {device} from '../util/theme'

const Wrapper = styled(FlexBox)`
    position: fixed;
    height: 50%;
    z-index: 0;

    @media ${device.mobile} {
        flex-direction: column;
        padding: 0 3% 0 3%;
        height: 70%;
        justify-content: space-evenly;
    }
`
const TextBox = styled.div`
    margin: 3vw;
`
const Circle1 = styled(Circle)`
    position: absolute;
    bottom: -100%;
    left: 45%;

    @media ${device.mobile} {
        bottom: -45%;
        left: 50%;
    }
`

const home = () => {
    const windowSize = window.innerWidth;
    return (
        <>
            <FlexBox>
                <Wrapper>
                    <Logo />
                    <TextBox>
                        <H1>{eng.home.first}</H1>
                        <H1>{eng.home.second}</H1>
                        <Circle1 width='30vw'></Circle1>
                        <Arc/>
                    </TextBox>
                </Wrapper>
            </FlexBox>
        </>
    );
};

export default home;