import React, { Component } from "react";
import axios from 'axios';

class CancionesForm extends Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    submitNuevacanciones(event){
            //Prevenga el comportamiento por defecto del submit
            event.preventDefault()
            //enviar request al backend via axios
            axios.post('http://localhost:5000/canciones' , 
                        {
                            nombre: this.refs.nombre.value,
                            cantante: this.refs.cantante.value,
                            genero: this.refs.genero.value

                        }
                    ).then( (respuesta)=> console.log(respuesta) )
                     .catch( error => console.log(error) )
                    
    }

    render(){
        return(

        <div className="row">
            <h5>Agrega una canción</h5>
            <form className="col s12" onSubmit={this.submitNuevacanciones.bind(this)}>
                <div className="row">
                    <div className="input-field col s6">
                        <input  id="nombre" type="text" ref="nombre" />
                        <label htmlFor="nombre">Nombre</label>
                    </div>
                    <div className="input-field col s6">
                        <input  id="cantante" type="text" ref="cantante" />
                        <label htmlFor="cantante">Cantante</label>
                    </div>
                </div>
                
                    <div className="input-field col s6">
                        <input  id="genero" type="text" ref="genero" />
                        <label htmlFor="genero">Género</label>
                    </div>
                    <div className="input-field col s6">
                        <button name="action"
                                type = "submit"
                                className = "btn waves-effect waves-light"

                        > Guardar

                        </button>
                    </div>
               
            </form>
        </div>
    )
}
}

export default CancionesForm
