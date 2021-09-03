// Desafio 1
let nombre = prompt('Ingrese su nombre');
let apellido = prompt('Ingrese su apellido');
let edad1 = prompt('¿Cuál es tú edad?');
let animal = prompt('¿Cuál es tú animal favorito?')
let fechaDeNacimiento = parseInt(edad1);

console.log('Bienvenido ',nombre, apellido);
console.log('Tú fecha de nacimiento fue en ' + (2021 - fechaDeNacimiento) + ' ' + 'y tienes ' + edad1 + ' años');
console.log('Tú animal favorito es el/la ' + animal);
console.log('Dentro de 10 años tendrás ' + (fechaDeNacimiento + 10) + ' años');

// Desafio 2
let edad2 = prompt('¿Cuantos años tienes?');
let mayoria = parseInt(edad2);
let fruta = prompt ('¿Qué fruta prefieres manzana o pera?');
let numero = prompt('Escribe un número');
let numint = parseInt(numero);
let saludo = prompt('Escribe "hola"');

if (mayoria >= 18){
    alert('Eres mayor de edad. Tú edad es ' + mayoria);
}
else if(mayoria < 18){
    alert('Eres menor de edad. Tú edad es ' + mayoria);
}
else{
    alert('No escribiste tú edad.');
}

if (fruta == 'manzana'){
    alert('Prefieres la ' + fruta);
}
else if(fruta == 'pera'){
    alert('Prefieres la ' + fruta);
}
else{
    alert('No escribiste la fruta.');
}

if((numint >= 10) && (numint < 50)){
    alert('El número está entre el 10 y el 50.');
}

if(saludo == 'hola'){
    alert('Escribiste hola');
}
else{
    console.log('No escribiste hola.');
}