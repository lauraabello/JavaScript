import React from 'react'
import axios from 'axios'
const CancionesDetalle = (props) => {
  const remove = (_id) => {
    axios.get(`http://localhost:5000/canciones/delete/${_id}`)
      .then(function(response) {
        this.setState({
          filtered: response
        })
      }).catch(function(error) {
        console.log(error)
      })
  }
  return ( 
        <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey lighten-1">
        <div class="card-content white-text">
          <span class="card-title">{props.canciones.nombre} {props.canciones.cantante}</span>
          <p>Nombre: {props.canciones.nombre}</p>
          <p>Cantante:  {props.canciones.cantante}</p>
          <p>Género: {props.canciones.genero}</p>
        </div>
        <div class="card-action">
              
              <button type="submit" onClick={remove.bind(this, props.canciones._id)} className="waves-effect waves-light btn" > Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      )
  
  }
  
  
  export default CancionesDetalle