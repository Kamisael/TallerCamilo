import React, { Component } from 'react';


function Ejercicio10() {
    
    const crearTabla = () =>{
        tablaInput()
      }

      const sum = () =>{
        calcular()
      }

function tablaInput (){
  const div = document.getElementById("tablaI")
  div.innerHTML = ""
  var table = document.createElement("table")
  const m = document.getElementById("columnasInput").value
  const n = document.getElementById("filasInput").value
  if(m <= 0 || n <= 0){
    var mensaje = document.createTextNode("Tienen que ser numero mayores o diferentes a 0")
    div.appendChild(mensaje)
  }else{
    
    for(let i = 0; i<n; i++){
      var fila = document.createElement("tr")
      for(let j = 0; j<m; j++){
        var celda = document.createElement("td")
        var texto = document.createElement("input")
        celda.appendChild(texto)
        fila.appendChild(celda)

      }
      table.appendChild(fila)
    }
    div.appendChild(table)
    table.setAttribute("border", "2")
  }
}

function calcular(){
    let numeros= []
    let sumaTotal = 0
    var nTd = document.createElement("td")
    const table = document.getElementById("tablaI").children[0]
    const filas = table.children
    for (let tr of filas){
      var td = tr.children
      for(let input of td){
        var n = input.children[0].value
        numeros.push(n)
      }
    }
    numeros.forEach((num)=>{
      sumaTotal += parseFloat(num)
    })
    console.log(sumaTotal)
  
    var total = document.createTextNode(sumaTotal)
    nTd.appendChild(total)
    table.appendChild(nTd)
  }

    return (
        <>
            <h2>Taller Ejercicio 10</h2>
            <div>
                <span>Tamaño de su tabla </span>
                <span>Filas:</span>
                <input type="text" id='filasInput'></input>
                <span>Columnas:</span>
                <input type="text" id='columnasInput'></input>
                <button onClick={crearTabla}>Crear</button>
                <button onClick={sum}>calcular</button>
            </div>
            <div id='tablaI'></div>
        </>
    )




}

export default Ejercicio10