import React, { useState } from "react";

const Formulario = ({setUser, handleSubmit}) => {

    const handleChange=(event) => {
        console.log(event);
        setUser((prevUser) => ({...prevUser, [event.target.name]: event.target.value}));
    }

    // const handleChange = (event) => {
    //     setUser({
    //       ...user,
    //       [event.target.name]: event.target.value
    //     })
    //   }

    return (

        

        <form onSubmit={handleSubmit}>

            <label>Ingrese nombres: </label>
            <input name="name" type="text"  onChange={handleChange}></input>
            
            <label> Ingrese Color Favorito: </label>
            <input name="color" type="text" onChange={handleChange}></input>

            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;
