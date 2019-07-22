import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita,eliminarCita}) => 
(
    <div className="media mt-3">
        <div className="media-body">
            
            <h3 className="mt-0">{cita.maquina}</h3>
            <p className="card-text"><span>Nombre Propietario:</span> {cita.dueno}</p>
            <p className="card-text"><span>Fecha:</span> {cita.fecha}</p>
            <p className="card-text"><span>Horario:</span> {cita.hora}</p>
            <p className="card-text"><span>Sintomas:</span></p>
            <p className="card-text"><span className="badge badge-pill badge-danger">{cita.sintomas}</span></p>
            
            <button
            className="btn btn-danger"
            onClick={ () => eliminarCita(cita.id)}
            >Borrar &times;
            </button>

        </div>  
    </div> 
);

Cita.propTypes = {
    cita:PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
export default Cita;