// CREAMOS VARIABLES Y RECOGEMOS LOS ELEMENTOS DEL HTML

var miBoton = document.getElementById
('boton')
var miBoton2 = document.getElementById
('boton2')
var miBoton3 = document.getElementById
('boton3')
var miBoton4 = document.getElementById
('boton4')

// CREAMOS VARIABLES RESULTADOS
var resultado = document.getElementById
('resultado')

var resultado2 = document.getElementById
('resultado2')

var resultado3 = document.getElementById
('resultado3')

var resultado4 = document.getElementById
('resultado4')

// CREAMOS VARIABLES SPAN

var span1 = document.getElementById
('span1')

var span2 = document.getElementById
('span2')

// CREAMOS LAS VARIABLES DE LA OPERACION A REALIZAR
var numero1 = 100
var numero2 = 4

span1.innerHTML = numero1
span2.innerHTML = numero2


// FUNCION SIN PARAMETRIZAR

function suma(){
 
    resultado.innerHTML = numero1 + numero2 
}

function multiplicar(){
   
    resultado.innerHTML = numero1 * numero2
}

function restar(){
    resultado.innerHTML = numero1 - numero2
}

function dividir(){

    resultado.innerHTML = numero1 / numero2
}


//CREAMOS EL EVENTO Y LLAMAMOS A LA FUNCIÓN 

miBoton.addEventListener('click', suma)

miBoton2.addEventListener('click', multiplicar)

miBoton3.addEventListener('click', restar)

miBoton4.addEventListener('click', dividir)



