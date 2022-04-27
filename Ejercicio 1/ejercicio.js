var miVariable = 'Hola mundo'
var numero1 = 4
var numero2 = 6
var suma = numero1 + numero2
var restar = numero1 - numero2
var multiplicar = numero1 * numero2
var dividir = numero1 % numero2
var modulo = numero1 % numero2 

//muestro el resultado
console.log(miVariable);
console.log(suma);
console.log(restar);
console.log(multiplicar);
console.log(dividir);
console.log(numero1 % numero2);
//OBTENER ELEMENTOS DEL HTML
var miBoton = document.getElementById('boton')
console.log(miBoton);
miBoton.addEventListener('click', function(){
    //AQUI IRÁ LO QUE QUEREMOS QUE HAGA AL PASAR EL EVENTO
    console.log('click');
 
    document.getElementById('restar').innerHTML = restar
})