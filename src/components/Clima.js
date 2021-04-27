import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultadoapi}) => {
    //extraer los valores
    const{name,main}=resultadoapi;
    if(!name){
        return true;
    }

    //Para restrar en grados kelvin
    const kelvin =273;
    return ( 
    <div className="card-panel white col s12">
        <div className = "black-text">
            <h2>El clima de {name} es: </h2>
            <p> {parseFloat(main.temp - kelvin, 10).toFixed(2)}<span>&#x2103;</span></p>
            <p> Temperatura Máxima: {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}<span>&#x2103;</span></p>
            <p> Temperatura Minima: {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}<span>&#x2103;</span></p>

        </div>
    </div>
    
    );
}
 
Clima.propTypes={
    resultadoapi: PropTypes.object.isRequired
}
export default Clima;