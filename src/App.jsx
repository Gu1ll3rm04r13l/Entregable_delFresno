// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Card from "./Components/Card.jsx";
import Formulario from "./Components/Formulario.jsx";

function App() {
  
  

  const [studentName, setStudentName] = useState("")
  const [studentColor, setStudentColor] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
  }


  return (
    <>
      <div className="App">
        <h1>Carga de estudiantes</h1>
        <Formulario handleSubmit={handleSubmit}  setStudentName={setStudentName} setStudentColor={setStudentColor}/>
        
        <Card studentName={studentName} studentColor={studentColor}/>
      </div>
    </>
  );
}

export default App;