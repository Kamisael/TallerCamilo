import React,{ Component } from 'react';
class Ejercicio4 extends Component{

    constructor(props){
        super(props)
        this.state={
            num1:'',
            num2:'-',
            num3:'.'
        }
    }

    handleInputChange = (event) =>{
        event.preventDefault()
        console.log(event)
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render(){
        const{num1} = this.state;
        const{num2} = this.state;
        const{num3} = this.state;
        return (
            <div>
                <h2>
                Taller Ejercicio 4
                </h2>
                
                <form onSubmit={this.handleSubmit}>
                <p>Numero 1: <input type='text' placeholder='Ingresa el primer numero' name= 'num1' onChange={this.handleInputChange}/> </p>
                <p>Numero 2: <input type='text' placeholder='Ingresa el segundo numero' name= 'num2' onChange={this.handleInputChange}/> </p>
                <p>Numero 3: <input type='text' placeholder='Ingresa el tercer numero' name= 'num3' onChange={this.handleInputChange}/> </p>
                   
                </form>
                {(() => {

                    if (parseInt(num1) == parseInt(num2)) {
                        if (parseInt(num1) == parseInt(num3)) {
                            return ( <p><h4>1, 2 y 3 Son el mismo numero </h4></p>)
                        } 
                        else{
                            return (
                                <p><h4>1 y 2 Son el mismo numero </h4></p>)
                        }
                    }
                    else if (parseInt(num1) == parseInt(num3)) {
                        return (<p><h4>1 y 3 Son el mismo numero </h4></p>)
                    } 
                    else if (parseInt(num2) == parseInt(num3)) {
                        return (<p><h4>2 y 3 Son el mismo numero </h4></p>)
                    } 
                    else {
                        return (<p><h4>No hay numeros iguales </h4></p>)
                    }
                    })()}
            </div>
        )
    }
}

export default Ejercicio4
