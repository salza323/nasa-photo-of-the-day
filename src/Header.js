import React from 'react'
import styled, { keyframes } from 'styled-components'

const kf = keyframes `
    80%{
        transform: scale(1.5);
    }

    100%{
        transform: scale(1);
    }
`

const StyledHeader = styled.div`
    transform: scale(0.10);
    animation: ${kf} 1s forwards;

    background-color: ${pr=> pr.theme.quaternaryColor};
    color: ${pr=> pr.theme.tertiaryColor};
    font-style: ${pr=> pr.theme.fontOne};
`

const Header = (props) =>  {
    return(
        <StyledHeader className = 'App-header'>
            <h1> Nasa Photo Of The Day</h1>
        </StyledHeader>
    )
}

export default Header