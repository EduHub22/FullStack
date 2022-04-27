// CREAMOS VARIABLES Y RECOGEMOS LOS ELEMENTOS DEL HTML

var miBoton = document.getElementById
('boton')
var miBoton2 = document.getElementById
('boton2')
var miBoton3 = document.getElementById
('boton3')
var miBoton4 = document.getElementById
('boton4')
// CREAMOS VARIABLES PARA LOS BOTONES
var sumar = document.getElementById('sumar')
var restar = document.getElementById('restar')
var multiplicar = document.getElementById('multiplicar')
var dividir = document.getElementById('dividir')
var total = document.getElementById('total')


// CREAMOS VARIABLES PARA AÑADIR LOS NUMEROS

var span1 = document.getElementById
('span1')

var span2 = document.getElementById
('span2')

// CREAMOS LAS VARIABLES PARA ALMACENAR LOS NUMEROS
var numero1 = 100
var numero2 = 4

// AÑADIMOS LOS NUMEROS AL HTML
span1.innerHTML = numero1
span2.innerHTML = numero2


// CREAMOS LAS FUNCIONES QUE SE EJECUTARÁN AL HACER CLIEC EN LOS BOTONES

sumar.addEventListener('click', function (){
    total.innerHTML = 'TOTAL:'
    total.innerHTML = numero1 + numero2
})

multiplicar.addEventListener('click',function (){
    total.innerHTML = 'TOTAL:'
    total.innerHTML = numero1 * numero2
})

restar.addEventListener('click', function (){
    total.innerHTML = 'TOTAL:'
    total.innerHTML = numero1 - numero2
})

dividir.addEventListener('click',function (){
    total.innerHTML = 'TOTAL:'
    total.innerHTML = numero1 / numero2
})


//CREAMOS EL EVENTO Y LLAMAMOS A LA FUNCIÓN 

miBoton.addEventListener('click', sumar)

miBoton2.addEventListener('click', multiplicar)

miBoton3.addEventListener('click', restar)

miBoton4.addEventListener('click', dividir)



