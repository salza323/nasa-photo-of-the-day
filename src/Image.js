import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledImage = styled.div`
    padding: ${pr => pr.theme.paddingLg};
    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.secondaryColor};
    border-top: 3px solid ${pr=> pr.theme.secondaryColor};

    


    img{
        max-width: 85%;
        border: none;

        transition: all 0.3s ease-in-out;
        &:hover{
            transition: all 0.3s ease-in-out;
            border: 3px solid ${pr=> pr.theme.white};
        }
    }

    .explanation{
        padding: ${pr => pr.theme.paddingLg};
    }

    .credit{
        background-color: ${pr=> pr.theme.quaternaryColor};
        padding: ${pr=> pr.theme.paddingLg};
        border: 3px solid ${pr=> pr.theme.secondaryColor};
        color: ${pr=> pr.theme.primaryColor};

        
        transition: all 0.3s ease-in-out;
        &:hover {
            transition: all 0.3s ease-in-out;
            background-color: ${pr=> pr.theme.primaryColor};
            border: 3px solid ${pr=> pr.theme.tertiaryColor};
            color: ${pr=> pr.theme.tertiaryColor};
        }
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