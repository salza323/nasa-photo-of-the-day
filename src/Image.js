import React from 'react'

const Image = (props) => {
    console.log(props)
    return (
        <div>
            <img src = {props.data.hdurl}/>
        </div>
     )
}
export default Image