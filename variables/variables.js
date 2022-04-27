var numero1 = 5
var numero2 = 7

var sumar = document.getElementById('suma')
var multiplicar = document.getElementById('multiplica')
var dividir = document.getElementById('divide')
var restar = document.getElementById('resta')

var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')

n1.innerHTML = numero1
n2.innerHTML = numero2

sumar.addEventListener('click', function(){
    resultado.innerHTML=''
    resultado.innerHTML += numero1 + numero2
})

multiplicar.addEventListener('click', function(){

    resultado.innerHTML = ' '
    resultado.innerHTML += numero1 * numero2

})

dividir.addEventListener('click', function(){

        resultado.innerHTML = ' '
        resultado.innerHTML += numero1 / numero2

})

restar.addEventListener('click', function(){
    resultado.innerHTML = ''
    resultado.innerHTML += numero1 - numero2
})
