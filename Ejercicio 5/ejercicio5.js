
//VARIABLES BOTONES
var mostrar = document.getElementById
('mostrar')

var ocultar = document.getElementById
('ocultar')

//VARIABLES DIV DONDE MOSTRAR
var fruteria = document.getElementById
('fruteria')

//ARRAY
var fruteriaArray = ['Manzanas', 'Pera', 'Uvas', 'Melocotón']

//FUNCION QUE EJECUTA LA ACCION

mostrar.addEventListener('click', 
function(){
    fruteria.innerHTML= ''
    for(let i = 0; i < fruteriaArray.
        length; i++){
            fruteria.innerHTML += '<p>'
            +fruteriaArray[i]+'</p>'
        }

})

ocultar.addEventListener('click', 
function(){
    fruteria.innerHTML = ''
}) 

