//import logo from './logo.svg';
import { Alert } from 'bootstrap';
import './App.css';
//import { useState } from 'react';
//import CCard from './componentes/CCard';
import Tareas from './componentes/Tareas';
import React, { useEffect, useState } from 'react';

function App() {

const [nuevoItem, setNuevoItem]= useState([
  {name:'Matematicas', done: false},
  {name:'Ciencias', done: false},
  {name:'Ingles', done: false}
])

function crearTarea(nuevaTarea){
  if (!nuevoItem.find(tarea=> tarea.name=== nuevaTarea))
setNuevoItem([...nuevoItem,{name: nuevaTarea, done: false}])
}
useEffect(()=>{
  localStorage.setItem('input', JSON.stringify(nuevoItem))
},[nuevoItem])

  return (
   <div className="App">
      <Tareas crearTarea={crearTarea}/>
      <table>
        <thead>
          <tr>
            Tareas
          </tr>
        </thead>
        <tbody>
        {nuevoItem.map(tarea =>(
          <tr key={tarea.name}>
            {tarea.name }

          </tr>
     ))}

        </tbody>
      </table>
   
    </div>
  );
}

export default App;













//function MyButton() {
 // return (
  //  <button>
   //   I'm a button
   // </button>
  //);
//}
//function Hola(props){
 // return <h1>Hola, {props.name}</h1>
//}
//console.log('Hola Mundo')
 // const now = new Date()
 // const a = 10
  //const b = 20
  //console.log (now, a+b)
 // const friends = [
  //  { name: 'Peter', age: 4 },
    //{ name: 'Maya', age: 10 },
  //]

//de un return es
 {/*<div className="App">*/}
      {/*<p>Hola mundo</p>*/}
     {/*<p>Hola mundo, hoy es {now.toString()}</p>*/}
     {/*<p>La {a} suma de {b} es {a + b}</p>*/}
    {/* <MyButton/>*/}
      {/*< Hola name="Julian"/>
      < Hola name="Ema"/>
      < Hola name="Jek"/>
      < Hola name="Farlen"/>*/}
    {/*<p>Mi amigo {friends[0].name} tiene {friends[0].age} años de edad</p>
    <p>Mi amiga {friends[1].name} tiene {friends[1].age} años de edad</p> */}

   // </div>