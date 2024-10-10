function Metodos(){
    //metodo para sacar mensaje en consola
    const mostrarMensaje = () => {
        console.log("Boton Pulsado!");
    }

    return (
        <div>
            <h1>Ejemplos métodos React</h1>
            {/*llamamos al método segun se inicia la página */}
            {mostrarMensaje()}
            <button onClick={ () => mostrarMensaje() }>Pulsa!</button>
        </div>
    )
}

export default Metodos;