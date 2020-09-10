import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledImage = styled.div`
    padding: ${pr => pr.theme.paddingLg};
    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.secondaryColor};


`

const StyledPhoto = styled.div`
    width: 60%;
`

const Image = (props) => {
    console.log(props)
    return (
        <StyledImage>
            <div className = 'title'>
                <h2>{props.data.title}</h2>
            </div>
            <div className = 'date'>
                <h3>{props.data.date}</h3>
            </div>
            <StyledPhoto className = 'image'>
                <img src = {props.data.url} alt = 'nasa of the day'/>
            </StyledPhoto>
            <div className = 'explanation'>
                <h3>{props.data.explanation}</h3>
            </div>
            <div className = 'author'>
                <h3>{props.data.copyright}</h3>
            </div>
        </StyledImage>
     )
}
export default Image