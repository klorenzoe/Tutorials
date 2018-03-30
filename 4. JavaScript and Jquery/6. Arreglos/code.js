function arreglos(){
    var arreglo = new Array();
    arreglo.push(3);
    arreglo.push('Hola mundo');

    console.log(arreglo[0]);

    for(var i in arreglo){
        console.log(arreglo[i]);
    }
}
function JOIN(){    
    var cadena = 'abc';
    var arreglo = cadena.split("");

    console.log(arreglo.join("-"));
    console.log(arreglo);

}