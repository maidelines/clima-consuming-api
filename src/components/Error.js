import React from 'react';
import PropTypes from 'prop-types';
const Error = ({mensaje}) => {
    return (  
       <div className="card-panel pink col s12">
        <div className = "black-text">
            <h2> {mensaje}  </h2> </div>        
    </div>
    );
}
Error.propTypes={
    mensaje: PropTypes.string.isRequired
}
 
export default Error;