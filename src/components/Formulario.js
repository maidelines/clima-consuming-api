import React, {useState} from "react";
import PropTypes from 'prop-types';

const Formulario = ({busqueda, guardarBusqueda, consultar, setConsultar}) => {
  //state del formulario
  const [error, setError] = useState(false);

  //extrae ciudad y pais
  const { ciudad, pais } = busqueda;

  //funcion que coloca los elementos en el State
  const handleChange = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario da submit
const handleSubmit=e=>{
    e.preventDefault();
    //validar
if(ciudad.trim()==='' || pais.trim()===''){
setError(true);
return
}
setError(false);
setConsultar(true);
    //pasarlo al componente principal
}

  return (
    <form 
    onSubmit= {handleSubmit}>
        {error ? <p className="pink darken-1 error" > Todos los campos son obligatorios</p>: null}
      <div className="input-field col s12">
        <input type="text" name="ciudad" id="ciudad" value={ciudad} onChange={handleChange} />
        <label htmlFor="ciudad">Ciudad:</label>
      </div>
      <div className="input-field col s12">
        <select name="pais" id="pais" value={pais} onChange={handleChange}>
          <option value="">Seleccione un país</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
          <option value="CU">Cuba</option>
        </select>
        <label htmlFor="pais">Pais:</label>
      </div>
      <div className="input-field col s12">
          <input
          type="submit"
          value="Buscar Clima"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
          />
      </div>
    </form>
  );
};
Formulario.propTypes={
  busqueda: PropTypes.object.isRequired,
  guardarBusqueda: PropTypes.func.isRequired,
  setConsultar:PropTypes.func.isRequired,
  
}
export default Formulario;
