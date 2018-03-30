/*clase */
function Perro(nombre){
    this.nombre = nombre;
    this.ladra = () =>{
        alert('wuuuaf wuaaf '+ nombre);
    }
}

/* objeto */
var perro1 = new Perro('Chauchi');
var perro2 = new Perro('Lechuga');

alert('Perro1 se llama: '+perro1.nombre);
alert('Perro2 se llama: '+ perro2.nombre);

perro1.ladra();
perro2.ladra();