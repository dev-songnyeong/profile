import React from 'react';
import styled from 'styled-components'
import { FlexBox, H4 } from '../util/util'

const IconContainer = styled(FlexBox)`
    width: 80%;
    height: 20%;
    justify-content: space-around;
`;
const ImgBox = styled.img`
    width: 10%;
    cursor: pointer;
`
const TextBox = styled.a`
    width: 70%;
    text-decoration:none;
`

const IconBox = ({props:{logo, address, name}}) => {
    return (
        <>
            <IconContainer >
                <ImgBox src={logo}/>
                <TextBox href={address}>
                    <H4>{address}</H4></TextBox>
            </IconContainer>
        </>
    );
};

export default IconBox;