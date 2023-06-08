import React from 'react'

const Card = ({user}) => {
    
    // const buttonStyle = {
    //     backgroundColor: ('#'+props.color),
    //     color: 'black',
    // };

    return (
        <div className='card'>
            <h2>Hola, {user.name}</h2>
            <h4>Sabemos que tu color favorito es: </h4>
            <h3 style={{backgroundColor: user.color}}>{user.color}</h3>
            {/* <button style={buttonStyle}>{'#'+ props.color}</button> */}
        </div>
    )
}

export default Card