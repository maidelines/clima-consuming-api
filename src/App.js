import React, { Fragment,useEffect,useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {
  //state de la APP
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [resultadoapi, setResultadoapi] = useState({});
  const [consultar, setConsultar] = useState(false);
  const [error, setError] = useState(false);
  //extraer de la búsqueda la ciudad y el pais
  const {ciudad,pais}=busqueda;

 
  useEffect(() => {
    const consultarApi = async ()=>{
 if(consultar){
  const appID='8da29fd7255f5d3320cf8d4ac5bcafe5'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}` 
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
 setResultadoapi(resultado);
 setConsultar(false);
 //Detecta si hay error en la consulta
 if(resultado.cod==="404"){
  setError(true);}
  else{setError(false);}
  
}
    }   
    consultarApi();
  }, [consultar]);
let componente;
if(error){
  componente=  <Error mensaje = "No existen resultados para la ciudad y el país seleccionado"/>
} else{
  componente=<Clima resultadoapi ={resultadoapi}/>
}
 
  return (
    <Fragment>
  <Header
  titulo='Clima React App'/>
  <div className="contenedor-form"> 
  <div className = "container">
    <div className="row" >
      <div className = "col m6 s12">
      <Formulario
      busqueda={busqueda}
      guardarBusqueda={guardarBusqueda}
      consultar={consultar}
      setConsultar={setConsultar}/>
      </div>
      <div className = "col m6 s12">
        {/* <Clima
        resultadoapi={resultadoapi}/> */}
        {componente}
      </div>

    </div>
  </div>
  </div>
  </Fragment>
  );
}

export default App;
