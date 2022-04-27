// var usuario = new Object()
// usuario.Nombre = 'Fran'
// usuario.Ciudad = 'Aragón'
// usuario.Edad= 23

// console.log(usuario)

// document.getElementById('usuarios').innerHTML = usuario

var usuario = new Object()
usuario.Nombre = 'Fran'
usuario.Ciudad = 'Aragón'
usuario.Edad= 23



console.log(usuario)

document.getElementById('usuarios').innerHTML = usuario

document.getElementById('ver').addEventListener('click', function(){

    usuario.innerHTML += '<li>'usuario'</li>
})
console.log(usuario)






