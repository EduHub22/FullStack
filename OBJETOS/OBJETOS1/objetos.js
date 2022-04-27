var miCoche = new Object()
miCoche.color = 'Negro'
miCoche.anio = 1969
miCoche.motor = '300cv'
miCoche.accesorios = ['Posavasos', 'Techo Solar', 'Alfombrillas']
miCoche.ruedas = {

    numeroRuedas: 4,
    pesoRuedas: '180gramos'
}
console.log (miCoche);


console.log (miCoche);

document.getElementById('color').innerHTML = miCoche.Seat

var miCoche2 = {
    color: 'Blanco',
    motor: '95 cv',
    anio: 2015,
    accesorios: ['Posavasos', 'Techo Solar', 'Alfombrillas']
}

console.log(miCoche2['color'])

function Seat(colorCoche, pesoCoche, motorCoche, anioCoche){
    this.color = colorCoche
    this.peso = pesoCoche
    this.motor = motorCoche
    this.anio = anioCoche

}

var miSeat = new Seat('azul', '190gramos', '500cv, 2022')

document.getElementById('color').innerHTML = miCoche.Seat



console.log(miSeat)