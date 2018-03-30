function condicionIf(num)
{
    if(num>0){
        alert('el numero es mayor a cero');
    }else if(num==0){
        alert('el numero igual a cero');
    }else{
        alert('el numero es menor a cero');
    }
}

function condicionTernaria(a){
 alert  ((a=='a') ? 'es una letra a': 'no es una letra a');
}

function estructuraSwitch(opcion){
    switch(opcion){
        case 'a':
        alert('la opción es una letra a');
        break;
        case 'b':
        alert('la opción es una letra b');
        break;
        case 'c':
        alert('la opción es una letra c');
        break;
        default:
        alert('no sé que valor tiene');
        break;
    }
}