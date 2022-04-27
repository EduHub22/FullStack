
//var marcas = document.getElementById
//('marcas')

//var marcas2 = document.getElementById
//('marcasForeach')

var cochesArray = ['BMW', 'VOLVO', 'SEAT', 'MERCEDES', 'KIA', 'ALFA ROMEO']


//BUCLE FOR

for (let i = 0; i < cochesArray.length; i++)
{

    document.getElementById('marcas').
    innerHTML += ( cochesArray[i]+ ', ')
    

}

//BUCLE FOREACH
cochesArray.forEach(function(elemento)
{
    marcasForeach.innerHTML += elemento+', '
    console.log(elemento)
    

})