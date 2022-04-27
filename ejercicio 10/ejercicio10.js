var entrada = document.getElementById
('nombres')

var listado = document.getElementById('listado')

var boton = document.getElementById
('boton')

var misNombres = []

boton.addEventListener('click', function
(){
    let nombreEncontrado = misNombres.find(elemento => elemento == entrada.value)

if(entrada.value == ''){
    alert('el campo está vacio');
    console.log('está vacio');}

    else if (nombreEncontrado){
        alert('El nomnre existe')}

        else {

            misNombres.push(entrada.value)
            alert('El nombre se ha insertado')
            misNombres.innerHTML += '<li>' +entrada.value+ '</li>'
                }

        })


