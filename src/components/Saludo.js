function Saludo(props) {
  // Esto es código js, podemos declarar múltiples variables
  var dato = "Mañana es viernes...";
  //   var nombre = props.nombre;
  //   var edad = props.edad;
  const { edad, nombre } = props;
  return (
    <div>
      <h1> React en Juernes </h1>
      <h2> Dato objetivo {dato} </h2>
      <h1>
        {" "}
        Su nombre es {nombre} y su edad {edad}{" "}
      </h1>
    </div>
  );
}

export default Saludo;
