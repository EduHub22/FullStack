// CREAMOS VARIABLES Y RECOGEMOS LOS ELEMENTOS DEL HTML
var miBoton = document.getElementById
('boton')
console.log(miBoton);
var resultado = document.getElementById
('resultado')

var span1 = document.getElementById
('span1')
var span2 = document.getElementById
('span2')

// CREAMOS LAS VARIABLES DE LA OPERACION A REALIZAR
var numero1 = 100
var numero2 = 4

span1.innerHTML = numero1
span2.innerHTML = numero2

// FUNCION SON PARAMETRIZAR

function suma(){
    resultado.innerHTML = numero1 + numero2
}

//CREAMOS EL EVENTO Y LLAMAMOS A LA FUNCIÓN SUMA QUE A SER


miBoton.addEventListener('click', suma)

miBoton1.addEventListener('click', suma)

