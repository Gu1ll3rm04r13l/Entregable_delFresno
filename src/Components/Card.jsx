// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Card = ({studentName, studentColor}) => {
    
    const buttonStyle = {
        backgroundColor: ('#'+studentColor),
        color: 'black',
    };

    return (
        <div className='card'>
        <h2>Hola, {studentName}</h2>
        <h3>Sabemos que tu color favorito es: </h3>
        <button style={buttonStyle}>{'#'+studentColor}</button>
    </div>
    )
}

export default Card