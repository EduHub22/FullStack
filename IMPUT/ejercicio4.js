var entrada = document.getElementById
('entrada')

var boton = document.getElementById
('boton')

boton.addEventListener('click', function
(){

console.log(entrada.value);
document.getElementById('listado')
.innerHTML += '<li>'+entrada.value+'</li>'

})