import React from 'react';
import styled from 'styled-components'

import { device } from '../util/theme'
import { FlexBox, H4 } from '../util/util'

const IconContainer = styled(FlexBox)`
    width: 80%;
    height: 20%;
    justify-content: space-around;

    @media ${device.mobile}{
    width: 84%;
  }
`;
const ImgBox = styled.img`
    width: 10%;
    cursor: pointer;
    
    @media ${device.mobile}{
    width: 7%;
  }
`
const TextBox = styled.a`
    width: 70%;
    text-decoration:none;
    
    @media ${device.mobile}{
    width: 80%;
  }
`

const IconBox = ({props:{logo, address, name}}) => {
    return (
        <>
            <IconContainer >
                <ImgBox src={process.env.PUBLIC_URL+logo}/>
                <TextBox href={address}>
                    <H4>{address}</H4></TextBox>
            </IconContainer>
        </>
    );
};

export default IconBox;