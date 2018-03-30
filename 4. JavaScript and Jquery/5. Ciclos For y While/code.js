/* Un ciclo es una sentencia que nos 
permite repetir una porción de código las veces
que se le indique */

function cicloFor() {
    for (var i = 0; i < 10; i++) {
        alert(i);
    }
}

function cicloWhile() {
    var i = 0;
    while (i < 10) {
        alert(i);
        i++;
    }
}
function doWhile() {
    var i = 0;
    do {
        alert(i);
    } while (i < 10);
}

function forEach(){
    var sandwich = ['lechuga', 'jamon', 'queso'];
    for(ingredient in sandwich){
        alert(sandwich[ingredient]);
    }
    
}