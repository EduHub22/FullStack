
var boton = document.getElementById('btn')
var entrada = document.getElementById('entrada')
var resultado = document.getElementById('resultado')

console.log(typeof(entrada.value));


    boton.addEventListener('click', function () {

        resultado.innerHTML = +entrada.value+
        console.log(resultado)

    switch (entrada.value) {
        case "1":
            console.log('Es Lunes');
           resultado.innerHTML = 'Es lunes'
            break;
        case "2":
            console.log('Es Martes');
            resultado.innerHTML = 'Es martes'
            break;
        case "3":
            console.log('Es Miércoles');
            resultado.innerHTML = 'Es miércoles'
            break;
        case "4":
            console.log('Es Jueves');
            resultado.innerHTML = 'Es jueves'
            break;
        case "5":
            console.log('Es viernes');
            resultado.innerHTML = 'Es viernes'
            break;
         case "6":
            console.log('Es sábado');
            resultado.innerHTML = 'Es sábado'
            break;
         case "7":
            console.log('Es domingo');
            resultado.innerHTML = 'Es domingo'
            break;

        default:
            console.log('No sé que día es hoy');
            resultado.innerHTML = 'ni idea'
    
}


})








