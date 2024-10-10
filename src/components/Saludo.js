function Saludo(props){ //importante recibir aqui props
    //ESTO ES CÓDIGO JS, PODEMOS DECLARAR MÚLTIPLES VARIABLES
    var dato = "Mañana es viernes";
    //propiedades dinamicas
    // var nombre = props.nombre;
    // var edad = props.edad;
    const {nombre, edad} = props;
    
    return(
        <div>
            <h1>React en Juernes</h1>
            <h2>Dato: {dato}</h2>
            <h1>Su nombre es {nombre} y su edad {edad}</h1>
        </div>
    )
}

export default Saludo;