$(document).on('ready', function(){
    var seleccion = $('.ejemp1');
   
    if(seleccion.length){
        console.log('existen: '+seleccion.length);
    }else{
        console.log('no existe el elemento seleccionado');
    }

    seleccion.not('.cl1').text('Este elemento se selecciona porque no tiene cl1');
});