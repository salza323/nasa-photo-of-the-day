import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledImage = styled.div`
    padding: ${pr => pr.theme.paddingLg};
    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.secondaryColor};


    img{
        max-width: 100%;
    }

    .explanation{
        padding: ${pr => pr.theme.paddingLg}
    }

    .credit{
        background-color: ${pr=> pr.theme.quaternaryColor};
        padding: ${pr=> pr.theme.paddingLg}
    }
`


const Image = (props) => {
    console.log(props)
    return (
        <StyledImage>
            <div className = 'title'>
                <h2>{props.data.title}</h2>
            </div>
            <div className = 'image'>
                <img src = {props.data.url} alt = 'nasa of the day'/>
            </div>
            <div className = 'explanation'>
                <h3>{props.data.explanation}</h3>
            </div>
            <div className = 'credit'>
                <h3>{props.data.copyright}</h3>
                <h4>{props.data.date}</h4>
            </div>
        </StyledImage>
     )
}
export default Image