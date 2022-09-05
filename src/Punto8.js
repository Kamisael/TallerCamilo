
import React, { Component } from 'react';
import { useState } from 'react';

function Ejercicio8() {
    const[listaNumeros, setDiv] = useState([])
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    const dividirN = () =>{
    
        setDiv(divida())
      }

      function divida (){
        let lista = []
        for(let i = 0; i < 10; i++){
          let r = random(1,25)
          lista.unshift(r)
        }
        console.log(lista)
        const siuu = document.getElementById("siuu").value
      
        let n = []
        if (siuu < 0 || siuu > 10){
          let m = "Debe estar entre 0 y 10"
          n.unshift(m)
        }else{
          let p = lista[siuu]
          lista.forEach((nein) =>{
            let j = nein/p
            n.unshift(j)
          })
        }
      
        return n
      }

    return (
        <>
            <div>
                <h2>Taller Ejercicio 8</h2>
                <div>
                    <span>Introduzca un numero que este entre el 0 y 10</span>
                    <input type="text" id='siuu'></input>
                    <button onClick={dividirN}>Calcular</button>
                </div>
                <ol>{
                    listaNumeros.map(
                        (nein, key) => {
                            return <li key={key}>{nein}</li>
                        })
                }
                </ol>
            </div>
        </>
    )




}

export default Ejercicio8