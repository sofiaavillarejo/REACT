//mostrar el doble de un numero al pulsar el boton
//importar css externo
import './../App.css';

function DobleNumero(){
    var ejemplo = "Soy una variable de jueves";

    //metodo para modificar la variable ejemplo
    const cambiarVariable = () => {
        console.log("Valor antes: " + ejemplo);
        ejemplo = "He cambiado de valor!"
        console.log(ejemplo);
    }
    //metodo para calcular el doble del numero pasado por parametro desde el btn
    const numeroDoble = (numero) => {
        var doble = numero *2;
        console.log(doble);
    }

    var miEstilo = {
        color: "blue",
        backgroundColor: "yellow"
    }

    return (
        <div className='App'>
            <h1 style={miEstilo}>Ejemplo métodos parámetros</h1>
            <h2 style={{color: "fuchsia"}}>{ejemplo}</h2>
            {/* se cambia de valor en consola*/}
            <button onClick={ () => cambiarVariable() }>Cambia el valor</button>
            <button onClick={ () => numeroDoble(7) }>Doble 7</button>
            <button onClick={ () => numeroDoble(199) }>Doble 199</button>
        </div>
    )
}
export default DobleNumero;