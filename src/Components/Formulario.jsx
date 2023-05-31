import React from 'react'

const Formulario = (setStudentName, setStudentColor, handleSubmit) => {
    return (

        

        <form onSubmit={handleSubmit}>
            
                <label>Ingrese nombres: </label>
                <input type="text" onSubmit={(e) => setStudentName(e.value)}></input>
                <label> Ingrese Color Favorito: </label>
                <input type="text" onSubmit={(e) => setStudentColor(e.value)}></input>
                <button type="submit">Enviar</button>
                
            
        </form>


    )
}


export default Formulario