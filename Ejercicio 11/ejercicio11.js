
var Total1 = document.getElementById('R1clasificacion')
var Total2 = document.getElementById('R2clasificacion')

var clasificacion = ['Ana', 'Oswaldo', 'Raúl', 'Celia','María', 'Antonio']


Total1 function (elemento){

    Total1.innerHTML += '<li>'+elemento+'</li>'

}

clasificacion.splice(2, 2, 'Celia', 'Raul')
clasificacion.pop()
clasificacion.splice(1, 3, 'Roberto', 'Amaya')
clasificacion.unshift('Marta')


  
    for(let i = 0; i < clasificacion.
        length; i++){
           document.getElementById('Total2').innerHTML += '<li>'+clasificacion+'</li>'
        }


//.innerHTML += '<li>'+clasificacion+'</li>';