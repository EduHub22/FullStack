var fruteria = ['Manzana', 'Fresa', ['melocotón', 'platano'], 'Peras', 'Kiwi']
console.log(fruteria.length);
console.log(fruteria[2]);// seleccion de una posición
console.log(fruteria.length-1);
console.log(fruteria[fruteria.length-1]); //el ultimo array
fruteria.push('Melocotón')//añade un array A LA ULTIMA POSICION
console.log(fruteria);
fruteria.pop()//elimina el ultimo
console.log(fruteria);
fruteria.unshift('Platano') //Añadir UN ELEMENTO a la primera posicion 
console.log(fruteria);
fruteria.shift()//elimina la primera posicion O ELEMENTO
console.log(fruteria);

var posicion = fruteria.indexOf('Peras')//buscar posicion elemento 
console.log(posicion);
fruteria.splice(posicion, 1, 'frutas')//borra y sustituye por elegido
console.log(fruteria)
//Si no lo encuentra da valor -1

//añade nuevo array despues de la posicion indicada
var posicion = fruteria.indexOf('Fresa')
console.log(posicion);
fruteria.splice(posicion, 0, 'frutas')
console.log(fruteria)

//BORRAMOS EL ELEMENTO 'UVAS' SI EXISTE EN EL ARRAY SIN CONOCER SU POSICION
var posicionUvas = fruteria.indexOf('uvas')
