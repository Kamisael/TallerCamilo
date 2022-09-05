
import React, { Component } from 'react';
import { useState } from 'react';

function Ejercicio6() {
    const [imparL, setListaI] = useState([])

    const crearListaI = () =>{
        setListaI(hola())
      } 

      function hola(){      
        const lista = []
        const nein = document.getElementById("numeroI").value
        console.log(nein)
        for (var i = 0; i<= nein; i++){
          if(i%2!==0){  
            lista.push(i)
          }
        }
        return lista
      }

    return (
        <div>
            <h2>Taller Ejercicio 6</h2>
            <div>
                <span>Ingresar</span>
                <input placeholder= 'Valor numero' type="text" id='numeroI'></input>
                <button onClick={crearListaI}>crear</button>
            </div>
            <ol>{
                imparL.map(
                    (nein, key) => {
                        return <li key={key}>{nein}</li>
                    })
            }
            </ol>
        </div>
    )




}

export default Ejercicio6