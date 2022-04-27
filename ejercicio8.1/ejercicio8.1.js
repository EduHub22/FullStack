
var lista = document.getElementById('listaSeleccion')

var miArray = []

document.getElementById('btn').addEventListener
('click', function(){

    function numeroElegidas(select){
        let numero = 0
        for(let i = 0; i < select.options.length;i++){

            if(select.options[i].selected){
                numero++
                miArray.push(select.options[i])
            }
        }

return numero
    }

    numeroElegidas(document.miFormulario.miSelect)

    lista.innerHTML += '<li>'+

    miArray
    // alert('Numero opciones elegidad:' +
    // numeroElegidas(document.miFormulario.miSelect))



})