var entrada = document.getElementById('entrada')

var boton = document.getElementById('boton')

var lista = document.getElementById('respuesta')

var miLista = []

boton.addEventListener('click', function
(){

    if(entrada.value == 'CEI'){
        
        alert('NO PUEDE SER CEI')

        }
        else{ 
       
            miLista.push(entrada.value)
            console.log(miLista);
            for(let i = miLista.length-1; i < miLista.length; i++){
               lista.innerHTML += '<li>'+miLista[i]+'</li>' 
            }
        lista.innerHTML += '<li>'+ miLista[miLista.length-1]+'</li>'
    }
    
  

})