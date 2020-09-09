import React from 'react'

const Image = (props) => {
    console.log(props)
    return (
        <div>
            <div className = 'title'>
                <h2>{props.data.title}</h2>
            </div>
            <div className = 'date'>
                <h3>{props.data.date}</h3>
            </div>
            <div className = 'image'>
                <img src = {props.data.hdurl}/>
            </div>
            <div className = 'explanation'>
                <h3>{props.data.explanation}</h3>
            </div>
            <div className = 'author'>
                <h3>{props.data.copyright}</h3>
            </div>
        </div>
     )
}
export default Image