import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledHeader = styled.div`
    color: ${pr=> pr.theme.tertiaryColor};
`

const Header = (props) =>  {
    return(
        <StyledHeader className = 'App-header'>
            <h1> Nasa Photo Of The Day</h1>
        </StyledHeader>
    )
}

export default Header