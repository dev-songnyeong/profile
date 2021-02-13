import React from 'react';
import styled from 'styled-components'

import ProjectBox from '../components/ProjectBox'

import { FlexBox, H1 } from '../util/util'
import {eng} from '../util/texts'

const Wrapper = styled(FlexBox)`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    z-index: 5;
    background: ${props => props.theme.colors.bgColor};
`

const projects = () => {
    return (
        <FlexBox direction='column' height='160vh'>
            <Wrapper height='33%'>
                <H1>Projects</H1>
            </Wrapper>
            <Wrapper >
                {
                    eng.projects.map(project => (
                        <ProjectBox key={project.id} props={project}/>
                    ))
                }
            </Wrapper>

        </FlexBox>
    );
};

export default projects;