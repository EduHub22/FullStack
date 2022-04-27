
var respuesta = document.getElementById('respuesta')

var cochesArray = ['BMW', 'VOLVO', 'SEAT', 'MERCEDES', 'KIA', 'ALFA ROMEO']


//BUCLE FOR


for (let i = 0; i < cochesArray.length; i++)
{


    respuesta.innerHTML += cochesArray[i]+ ', '

    if (i == cochesArray.length-1){
        respuesta.innerHTML += cochesArray[i]}
        else{
        respuesta.innerHTML += cochesArray[i] + ','

        }


    }
    

//BUCLE FOREACH
//cochesArray.forEach(function(elemento)
//{
  //  marcasForeach.innerHTML += elemento+', '
    //console.log(elemento)
    

//})