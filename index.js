let vehiculo

let chico
let hatchback
let sedan
let suv
let pickup


const precioAcrilico = 40000;

function presupuestoFinal() {
    let mensaje = alert(`¡IMPORTANTE!
    El costo del tratamiento acrilico es de $40000
    Puede variar dependiendo el tamaño del vehiculo.`);
    let nombreCliente = prompt("¿Cual es su nombre?");
    let vehiculo = prompt(nombreCliente + `Seleccione el tamaño del vehiculo
    (ESCRIBA EL NOMBRE)
    1. chico
    2.hatchback
    3.sedan
    4.suv
    5.pickup
    `);

    do {
        let pregunta = prompt("¿Quiere hacerlo en cuotas?");
        let cuotas 
        
        if (vehiculo == chico) {
         alert("el tratamiento cuesta $40000");   
}else if(vehiculo == hatchback){
    alert("El tratamiento tiene un 10% de recargo $ " + precioAcrilico *1.10);   
}else if(vehiculo == sedan){
    alert("El tratamiento tiene un 20% de recargo $ " * precioAcrilico *1.20);
}else if(vehiculo == suv){
    alert("El tratamiento tiene un 30% de recargo $ " * precioAcrilico *1.30);
}else if(vehiculo == pickup){
    alert("El tratamiento tiene un 40% de recargo $ " * precioAcrilico *1.40);
}else{
    alert("El presupuesto no es valido, seleccione una opcion mencionada.")
}

switch(pregunta){
    case "3":
        cuotas = vehiculo / 3
        break;
    
    case "6":
        cuotas = vehiculo / 6
        break;
    
    case "12":
        cuotas = vehiculo / 12
        break;
        default:

}
return cuotas
}while( i = true)

}

presupuestoFinal();