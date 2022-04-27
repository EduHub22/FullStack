

var botonVER = document.getElementById('boton')
var consulta = document.getElementById('tiempo')


botonVER.addEventListener('click', function(){
   

switch (consulta.value) {
  
    case 'Soleado':
        alert('Está soleado, perfecto para pasear y disfrutar de un gran día')
        console.log('Está soleado, perfecto para pasear y disfrutar de un gran día');
        break;
    case 'Nublado':
        alert('Está chungo, por si acaso llévate el paraguas')
        console.log('está nublado')
        break;
    case 'Lluvioso':
        alert('Si sales a la calle, ponte una botas para el agua')
        console.log('está lloviendo')
        break;
    case 'Nevando':
        alert('Te aconsejo que pongas las cadenas al coche')
        console.log('está nevando')
        break;
    default:
        alert('Haz lo que te de la gana')
        console.log('No sé el tiempo que hace');
}




 




})

