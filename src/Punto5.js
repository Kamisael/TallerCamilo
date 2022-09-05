import React, { Component } from 'react';
import { useState } from 'react';

function Ejercicio5() {
    const [menorMLista, setLista] = useState([])

    const crearLista = () => {
        setLista(menorM())
    }

    function menorM() {
        const lista = []
        const num = document.getElementById("lel").value
        for (var i = 1; i <= num; i++) {
            lista.push(i)
        }
        return lista
    }

    return (
        <div>
            <h2>Taller Ejercicio 5</h2>
            <div>
                <span>Ingresar </span>
                <input placeholder= 'Tamaño Lista'  type="text" id='lel'></input>
                <button onClick={crearLista}>crear</button>
            </div>
            <ol>{
                menorMLista.map(
                    (num, key) => {
                        return <li key={key}>{num}</li>
                    })
            }
            </ol>
        </div>
    )




}

export default Ejercicio5