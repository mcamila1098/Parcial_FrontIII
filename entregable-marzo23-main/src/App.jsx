import Card from './Card';
import { useState } from 'react';

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  const [nombre, setNombre] = useState('');
  const [libro, setLibro] = useState('');
  const [esValido, setEsValido] = useState(false);
  const [mensajeDeError, setMensajeDeError] = useState('');

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);  
  }

  const handleChangeLibro = (e) => {
    setLibro(e.target.value);
  }
  
  const handlerSubmit = (e) =>{
    e.preventDefault();
    
    const nombreSinEspacios = nombre.trim();
    if(nombreSinEspacios.length > 3 && libro.length >= 6){
      setEsValido(true);
      setMensajeDeError('');
    }else{
      setEsValido(false);
      setMensajeDeError('Por favor chequea que la información sea correcta');
    }
  }

  return (
    <div className="App">
      <h1>Elige un libro</h1>
      <form onSubmit={handlerSubmit}>
        <input
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={handleChangeNombre}
        />
        <br/><br/>
        <input 
          placeholder="Ingresa tu libro favorito"
          value={libro}
          onChange={handleChangeLibro}
        />
        <br/><br/>
        <button type="submit">ENVIAR</button>
      </form>
      <p style={{color:"red"}}>{mensajeDeError}</p>
      {esValido && <Card name={nombre} book={libro}/>}
    </div>
  );
}

export default App;
