import React, { Component } from 'react';
import { useState } from 'react';

function Ejercicio7() {
    const[salario, setSalario] = useState("")
    const [listaSalarios, setSalarios] = useState([])

    

      const annadirSalario = () =>{
        setSalarios(list => [...list, salario])
        setSalario("")
      }
      const calcularSal = () =>{
        setSalarios(salarios(listaSalarios))
      }
      const eliminarSal = () =>{
        listaSalarios.shift()
      }
      const onSetSal = (evt) =>{
        setSalario(evt.target.value)
      }

      function salarios(lista){
        let salarios = []
        if(lista.length === 10){
          lista.forEach((salario) => {
            let s = salario+ (salario*0.08)
            salarios.unshift(s)
          })
        }else{
          const m = "Error en el momento hay "+lista.length+" salarios y tienen que ser 10"
          salarios.unshift(m)
        }
      
        return salarios
      
      }

    return (
        <>
        <div>
            <h2>Taller Ejercicio 7</h2>
      <div>
        <span>Ingresar </span>
        <input placeholder= 'Salario' type="text" value={salario} onChange = {(evt) => onSetSal(evt)}></input>
        <button onClick={annadirSalario}>Añadir </button>
        <button onClick={calcularSal}>Dividir </button>
        <button onClick={eliminarSal}>Eliminar primero</button>
      </div>
    <ol>{
      listaSalarios.map(
        (nein, key) =>
        {
          return <li key={key}>{nein}</li>
        })
        
      }
    </ol>
        </div>
        </>
    )

}

export default Ejercicio7

