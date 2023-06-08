import React, { useState } from 'react';
import "./App.css";
import Card from "./Components/Card.jsx";
import Formulario from "./Components/Formulario.jsx";

function App() {
  
  const [user, setUser] = useState({
    name: '',
    color: ''
  })
    
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  

  const handleSubmit = (e) => {
      e.preventDefault();
      if(user.name.length > 2 && user.name[0] !== ' ' && user.color.length > 5){
        setShow(true);
        setError(false);
      }else{
        setError(true);
      }
      
  };

  return (
    <>
      <div className="App">
        <h1>Carga de estudiantes</h1>
      
        <Formulario setUser={setUser} handleSubmit={handleSubmit}/>
        {error && <p style={{color: 'red'}}>Por favor chequea que la informacion sea correcta</p>}
        {show && <Card user={user}/>} 
        
      </div>
    </>
  );
}

export default App;