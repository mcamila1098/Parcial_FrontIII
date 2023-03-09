//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(props) {

  return (
    <div>
      <p>Hola {props.name}!</p>
      <p>Sabemos que tu libro favorito es: {props.book}</p>
    </div>
  );
}

export default Card;
