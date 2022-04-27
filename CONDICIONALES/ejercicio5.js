
var entrada = document.getElementById('entrada')

var boton = document.getElementById('boton')

var respuesta = document.getElementById('respuesta')


boton.addEventListener('click', function(){

    if(entrada.value == 'CEI'){

        alert('NO PUEDE SER CEI')}
        else{ respuesta.innerHTML += '<li>'+entrada.value+'</li>'
        
    }
})
