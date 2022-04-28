
var boton = document.getElementById('btn')
var entrada = document.getElementById('entrada')
var resultado = document.getElementById('resultado')

console.log(typeof(entrada.value));


    boton.addEventListener('click', function () {

        resultado.innerHTML = +entrada.value+
        console.log(resultado)

        if (entrada.value >= 60){
            console.log('Se ha pasado');
            resultado.innerHTML = 'Se ha pasado'}
            else {
                entrada.value < 60
                console.log('La puntuación es menor');
                resultado.innerHTML = 'La puntación es menor'}
                

    
            

})








