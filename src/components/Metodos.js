function Metodos() {
  //DECLARAMOS UUN METODO PARA
  //MOSTRAR UN MENSAJE POR CONSOLA
  const mostrarMensaje = () => {
    console.log("Botón pulsado!");
  };
  return (
    <div>
      <h1>Ejemplo métodos React</h1>
      {/* <h2>{ejemplo}</h2> */}
      {/* <button onClick={() => cambiarVariable()}>Cambiar valor Ejemplo</button> */}
      {mostrarMensaje()}
      <button onClick={() => mostrarMensaje()}>Pulsar para algo...</button>
    </div>
  );
}
export default Metodos;
