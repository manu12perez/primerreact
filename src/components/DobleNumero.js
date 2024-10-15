import './../App.css';
function DobleNumero() {
  var ejemplo = "Soy una varible de jueves!";

  const numeroDoble = (numero) => {
    var doble = numero * 2;
    console.log(doble);
  };

  const cambiarVariable = () => {
    console.log("Valor Antes: " + ejemplo);
    ejemplo = "He cambiado de VALOR!";
    console.log("Valor Depués: " + ejemplo);
  }; 

  var miEstilo = {
    color: "blue",
    backgroundColor : "yellow",
  }
  
  return (
    <div className='App'>
      <h1 style={miEstilo}>Ejemplo métodos parámetros</h1>
      <h2 style={{color:"red"}}>{ejemplo}</h2>
      <button onClick={() => cambiarVariable()}>Cambiar valor Ejemplo</button>
      <button onClick={() => numeroDoble(7)}>Doble 7</button>
      <button onClick={() => numeroDoble(199)}>Doble 199</button>
    </div>
  );
}
export default DobleNumero;
