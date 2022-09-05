import React,{ Component } from 'react';


class Ejercicio1  extends Component{
    
    constructor(props){
        super(props)
        this.state={
            segundos:'0'
        }
    }

    handleInputChange = (event) =>{
        event.preventDefault()

        
        console.log(event)
        console.log(event.target.name)
        console.log(event.target.value)
    
        this.setState({
            segundos: new Date(event.target.value * 1000).toISOString().slice(11, 19)
        })

    }
    render(){
        const{segundos} = this.state

        return (
            <form onSubmit={this.handleSubmit}>
            <div class="mb-3">

                <h1>Taller Web</h1>
                <h2>
                Taller Ejercicio 1
                </h2>
                <label for="exampleInputEmail1" class="form-label">Segundos:</label>
                <input  type='text' maxlength='7' placeholder='Ingresa la hora en segundos' name= 'segundos' onChange={this.handleInputChange}/> 
                <h4><p>La hora es: {segundos}</p></h4>
                </div>
                </form>
            
        )

    }


}

export default Ejercicio1
