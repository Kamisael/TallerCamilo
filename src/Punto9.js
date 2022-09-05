import React, { Component } from 'react';
import { useState } from 'react';

function Ejercicio9() {
        
    

    const crearTabla = () =>{
        tabla()
      } 

      function tabla (){
        const div = document.getElementById("tabla")
        div.innerHTML = ""
        var table = document.createElement("table")
        const m = document.getElementById("columnas").value
        const n = document.getElementById("filas").value
            for(let i = 0; i<n; i++){
                var fila = document.createElement("tr")
                for(let j = 0; j<m; j++){
                var celda = document.createElement("td")
                var texto = document.createTextNode(j)
                celda.appendChild(texto)
                fila.appendChild(celda)
        
                }
                table.appendChild(fila)
            }
            div.appendChild(table)
            table.setAttribute("border", "2")
            
            
      }
    return (
        <>
            <h2>Ejercicio 9</h2>
            <div>
                <span>Ingrese el tamaño de su tabla </span>
                <span>Filas:</span>
                <input type="text" id='filas'></input>
                <span>Columnas:</span>
                <input type="text" id='columnas'></input>
                <button onClick={crearTabla}>crear</button>
            </div>
            <div id='tabla'></div>
        </>
    )




}

export default Ejercicio9