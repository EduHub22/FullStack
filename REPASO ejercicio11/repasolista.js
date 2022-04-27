var clasificacion = ['Ana','Oswaldo','Raúl','Celia','María','Antonio']

var lista1 = document.getElementById('lista1')
var listaActualizada = document.getElementById('lista2')

clasificacion.forEach(function(elemento){

   lista1.innerHTML += '<li>'+elemento+'</li>'
})


clasificacion.splice(2, 2, 'Celia', 'Raúl' )
clasificacion.pop()
clasificacion.splice(3, 0, 'Amaya', 'Ronaldo', 'Agustin')
clasificacion.unshift('MArta')



 for (let i = 0; i < clasificacion.length; i++){

        listaActualizada.innerHTML += '<li>' +clasificacion[i]+ '</li>'
       
        console.log(clasificacion)
   
    }
