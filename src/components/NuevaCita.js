import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const stateInicial = {
    cita:{
        maquina : '',
        dueno   : '',
        fecha   : '',
        hora    : '',
        sintomas: '' 
    },
    error: false
}

class NuevaCita extends Component {
    state = {...stateInicial}
    handleChange = (e) =>{
        //De esta manera se obtiene el nombre del campo y su valor
        //console.log(e.target.name + ': ' + e.target.value);

        /*Aqui se le asigna a cada campo el valor correspondiente 
        sobreescribiendo el state, haciendo una copia del mismo con el operador 
        ...rest
        */
        this.setState({
            cita : {
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })

    }

    //cuando el usuario envia el formulario 
    handleSubmit = e =>{
        e.preventDefault();
        //extraer los valores del state
        const {maquina,dueno,fecha,hora,sintomas} = this.state.cita;
        //validar que todos los campos esten llenos 
        if (maquina === '' || dueno === '' || fecha === '' || hora === '' || sintomas === '') {
            this.setState({
                error: true
            });

            //detiene la ejecucion
            return;
        }

        //Generar objeto con los datos
        const newCita = {...this.state.cita};

        newCita.id = uuid();

        //Agregar al state de citas
        this.props.crearNuevaCita(newCita);


        //colocar en el state el inicial
        this.setState({
            ...stateInicial
        })
    }


    render() {

        //extraer valor del state
        const {error} = this.state;


        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear nueva cita
                    </h2>

                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center">
                        Todos los campos son obligatorios
                    </div> : null}

                    <form
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                Maquina
                            </label>
                            <div className="col-sm-4 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Maquina"
                                    name="maquina"
                                    onChange={this.handleChange}
                                    value={this.state.cita.maquina}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                Propietario
                            </label>
                            <div className="col-sm-4 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Propietario"
                                    name="dueno"
                                    onChange={this.handleChange}
                                    value={this.state.cita.dueno}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"

                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                        
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Hora
                                </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"

                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                Sintomas
                            </label>
                            <div className="col-sm-4 col-lg-10">
                                <textarea 
                                    className="form-control"
                                    name="sintomas"
                                    placeholder="Describe sintomas"
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                ></textarea>
                            </div>
                        </div>

                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar Nueva Cita"/>
                        
                    </form>
            </div>

            </div >
        );
    }
}

NuevaCita.propTypes = {
    crearNuevaCita:PropTypes.func.isRequired
}

export default NuevaCita;