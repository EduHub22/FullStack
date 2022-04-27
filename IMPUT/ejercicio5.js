var entrada = document.getElementById('entrada')

var boton = document.getElementById('boton')

var lista = document.getElementById('respuesta')

var miLista = []

boton.addEventListener('click', function
(){
    lista.innerHTML =''
    miLista.push(entrada.value)
    console.log(miLista);
    for(let i = miLista.le; i < miLista.length; i++){
       lista.innerHTML += '<li>'+ miLista[miLista.length-1] +'</li>' 
    }

})

//CON BUCLE FOREACH

miLista.forEach(function(elemento){
    lista.innerHTML += '<li>'+elemento+'</li>'
})