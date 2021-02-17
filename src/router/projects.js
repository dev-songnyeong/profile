import React from 'react';
import styled from 'styled-components'

import ProjectBox from '../components/ProjectBox'

import { device } from '../util/theme'
import { FlexBox, H1 } from '../util/util'
import { eng } from '../util/texts'

const Wrapper = styled(FlexBox)`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    z-index: 5;
    padding-top: 7%;
    background: ${props => props.theme.colors.bgColor};
    overflow: scroll;

    ::-webkit-scrollbar {
    width: 1px;
    
    @media ${device.mobile}{
        z-index: 20;
    }
    }

`

const projects = () => {
    let mobile = window.innerWidth <= 375;
    return (
        <FlexBox direction='column' height={mobile? '100vh' : '160vh'} >
            <Wrapper height={mobile? '12%' : '18%'}>
                <H1>Projects</H1>
            </Wrapper>
            <Wrapper height='80%'>
                {
                    eng.projects.map(project => (
                        <ProjectBox key={project.id} props={project} />
                    ))
                }
            </Wrapper>

        </FlexBox>
    );
};

export default projects;