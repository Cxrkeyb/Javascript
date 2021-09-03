let edad = prompt('¿Cuantos años tienes?');
let mayoria = parseInt(edad);
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