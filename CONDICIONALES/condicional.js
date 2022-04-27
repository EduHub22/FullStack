
var elTiempo = 'Soleado'

if(elTiempo == 'Nublado'){

    console.log('ESTÁ SOLEADO');

}else{
    console.log('NO ESTÁ NUBLADO')


}


// else if



// && (y)
if (elTiempo == 'Lluvioso' && elTiempo == 'Nevando'){

    console.log('mejor no salgas de casa');
}
   

// || (o) cuando uno de los dos sea verdad
if (elTiempo == 'Lluvioso' || elTiempo == 'Nevando'){

    console.log('está lloviendo o nevando');
}

// exclamacion para negar
if (elTiempo != 'Lluvioso'){

    console.log('no está lloviendo');

}

//condicional switch

switch (elTiempo){
    case 'Soleado':
        console.log('Está soleado');
        break;
    case 'Nublado':
        console.log('está nublado');
        break;
    case 'Lluvioso':
        console.log('está lluviendo');
        break;
    case 'Nevando':
            console.log('está nevando');
        break;
    default:
        console.log('No se el tiempo que hace');

}

document.getElementById('boton').
addEventListener('click', function(){
    alert('NO PUEDE SER CEI')
})
