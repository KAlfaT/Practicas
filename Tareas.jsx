import React from "react";
import { useState } from 'react';

function Tareas(props){
const [nuevaTarea, setNuevaTarea] = useState()

const handleSumit = (e) => {
  e.preventDefault();
  props.crearTarea(nuevaTarea)
  localStorage.setItem('input', nuevaTarea)
}
    return(
        <div>
    <form onSubmit={handleSumit}>
      
 <input type='text'
 placeholder='Ingrese nueva tarea'
 onChange={(e)=> setNuevaTarea(e.target.value)}
 />
 <button >Guardar</button>
 </form>
    </div>
    )
}
export default Tareas;