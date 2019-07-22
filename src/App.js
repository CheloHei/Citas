import React, { Component } from 'react';

import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';


class App extends Component {
  state = {
    citas: []
  }

  //cuando carga toda la aplicacion
  componentDidMount(){

    const citasLS = localStorage.getItem('citas');
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }

  }

  //cuando eliminamos o agregamos algo nuevo
  componentDidUpdate(){
    localStorage.setItem('citas',JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos => {
    //copiar el state actual
    const citas = [...this.state.citas, datos];

    //agregar el nuevo
    this.setState({
      citas
    })
  }

  //elimina citas del state
  eliminarCita = id => {
    //toamr copia del this.state
    
    const citasAct = [...this.state.citas];
    //utilizar filter para sacar elemento
   
    const citas = citasAct.filter(cita => cita.id !== id)

    this.setState({citas});



  }

  render() {
    return (
      <div className="container">
        <Header

          titulo='Administrador Reparacion de PCs'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita
              crearNuevaCita={this.crearNuevaCita}
            />
          </div>
        </div>

        <div className="mt-5 col-md-10 mx-auto">
          <ListaCitas
            citas={this.state.citas}
            eliminarCita ={this.eliminarCita}
          ></ListaCitas>
        </div>

      </div>
    );
  }
}



export default App;
