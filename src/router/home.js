import React, { useContext } from 'react';
import styled from 'styled-components'

import Logo from '../components/logo'
import Arc from '../components/arc'
import {eng} from '../util/texts'
import { Circle, FlexBox, H1 } from '../util/util'

const Wrapper = styled(FlexBox)`
    position: fixed;
    height: 50%;
    z-index: 0;
`
const TextBox = styled.div`
    margin: 3vw;
`
const Circle1 = styled(Circle)`
    position: absolute;
    bottom: -100%;
    left: 45%;
`

const home = () => {
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