document.getElementById('btn').addEventListener('click', function(){

    function opcionesSeleccionadas(opciones){
       
        let numeroSeleccionadas = 0
        for(let i = 0; i < opciones.options.length; i++){

            if(opciones.options[i].selected){

                numeroSeleccionadas++
            }
        }
       
        return numeroSeleccionadas


    }

    alert('Numero de opciones seleccionadas:' + 
    opcionesSeleccionadas(document.selectForm.musicTypes))
 
})