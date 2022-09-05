import React, { Component } from 'react';

//Declara clase donde se encuentra un componente
class Ejercicio2 extends Component {


    //Constructor que imprime un valor predeterminado usando state, imprime caracteres vacios al inciar el programa.
    //Se usa this.state para actualizar la informacion de los 3 numeros en tiempo real, asi no es necesario introducir un boton para que nos de un resultado.
    constructor(props) {
        super(props)
        this.state = {
            num1: ''

        }
    }
    //Almacena los 3 numeros que introduce el usuario
    handleInputChange = (event) => {
        event.preventDefault()

        //Imprime los valores del input que almacena en la consola
        console.log(event)
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        //Guarda los valores de los 3 numeros introducidos en constantes, ya que los necesitaremos para comparar sus valores mas adelante.
        //Se usa state para actualizar la informacion en tiempo real, asi no es necesario introducir un boton para que nos de un resultado.

        const { num1 } = this.state;
        return (
            <div>
                <h2>
                Taller Ejercicio 2
                </h2>

                <form onSubmit={this.handleSubmit}>
                    <p>Cantidad de minutos: <input type='text' placeholder='Ingresa los minutos' name='num1' onChange={this.handleInputChange} /> </p>


                </form>
                {(() => {

                    if (parseInt(num1) <= 3) {

                        return (<p><h4>100 pesos</h4></p>)
                    
                     
                    }else if (parseInt(num1*100) + 100)

                        return (
                            <p><h4>{(num1*50+100)} pesos</h4></p>)   
                    }
             )()}
            </div>
        )
    }
}

export default Ejercicio2