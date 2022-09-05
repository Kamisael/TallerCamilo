import React,{ Component } from 'react';
class Ejercicio3 extends Component{
//Constructor que imprime un valor predeterminado usando state, imprime caracteres vacios al inciar el programa
    constructor(props){
        super(props)
        this.state={
            hora:'',
            nombres:''
        }
    }
    handleInputChange = (event) =>{
        event.preventDefault()

        console.log(event)
        console.log(event.target.name)
        console.log(event.target.value)
        const{numero} = parseInt(event.target.value);

        this.setState({
            hora: event.target.value>= 12 ? event.target.value >=19 ? (event.target.value >24 || event.target.value <0) ? "" :"Buenas noches," : "Buenas tardes,": "Buenos dias,"
            
        })
    }

    //Almacena el nombre
    handleInputChange2 = (event) =>{
        event.preventDefault()

         //Imprime los valores del input que almacena le nombre
        console.log(event)
        console.log(event.target.name)
        console.log(event.target.value)

        this.setState({
            nombres: event.target.value,
        })

    }
    render(){
        const{hora} = this.state;
        const{nombres} = this.state

    
        return (
            <div>
                <h2>
                Taller Ejercicio 3
                </h2>
                
                <form onSubmit={this.heandleSubmit}>
                <p>Nombre: <input type='text' placeholder='Ingresa tu nombre' name= 'nombres' onChange={this.handleInputChange2}/> </p>
                <p>Hora: <input type='text'   maxlength='2' placeholder='Ingresa la hora' name= 'hora' onChange={this.handleInputChange}/> </p>
                   
                </form>
                <p><h4>{hora} {nombres}</h4></p>

            </div>
        )

    }


}

export default Ejercicio3
