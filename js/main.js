// Desafio 1
function desafio1(){
    let nombre = prompt('Ingrese su nombre');
    let apellido = prompt('Ingrese su apellido');
    let edad1 = prompt('¿Cuál es tú edad?');
    let animal = prompt('¿Cuál es tú animal favorito?')
    let fechaDeNacimiento = parseInt(edad1);

    console.log('Bienvenido ',nombre, apellido);
    console.log('Tú fecha de nacimiento fue en ' + (2021 - fechaDeNacimiento) + ' ' + 'y tienes ' + edad1 + ' años');
    console.log('Tú animal favorito es el/la ' + animal);
    console.log('Dentro de 10 años tendrás ' + (fechaDeNacimiento + 10) + ' años');
}
// Desafio 2
function desafio2(){
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
}
function desafio3(){
    let edad = parseInt(prompt('¿Cuál es tu edad?'));
    let año = 2021;
    for(let i = edad; i <= 30; i++, año++){
        console.log('En el '+ año + ' tendrás ' + i + ' años.');
    }
    let texto = prompt('¿Cuál es tu fruta favorita? Para salirte escribe ESC.');
    while (texto != "ESC"){
        switch(texto){
            case 'banano':
            console.log('Te gusta la banana');
            break;

            case 'kiwi':
            console.log('Te gusta el ' + texto);
            break;

            case 'coco':
            console.log('Te gusta el ' + texto);
            break;

            case 'manzana':
            console.log('Te gusta la ' + texto);
            break;

            case 'limón':
            console.log('Te gusta el ' + texto);;
            break;

            case 'pera':
            console.log('Te gusta la ' + texto);
            break;

            case 'sandia':
            console.log('Te gusta la ' + texto);
            break;

            case 'melón':
            console.log('Te gusta el ' + texto);
            break;

            case 'melocotón':
             console.log('Te gusta la ' + texto);
            break;

            case 'granada':
            console.log('Te gusta la ' + texto);
            break;

            case 'mandarina':
            console.log('Te gusta la ' + texto);
            break;

            case 'naranja':
            console.log('Te gusta la ' + texto);
            break;

            case 'fresa':
             console.log('Te gusta la ' + texto);
            break;
            
            case 'uva':
            console.log('Te gusta la ' + texto);
            break;

            case 'arandano':
            console.log('Te gusta el ' + texto);
            break;

            case 'cereza':
            console.log('Te gusta la ' + texto);
            break;

            case 'papaya':
            console.log('Te gusta la ' + texto);
            break;

            case 'naranja':
            console.log('Te gusta la ' + texto);
            break;

            case 'coco':
            console.log('Te gusta el ' + texto);
            break;

            case 'piña':
            console.log('Te gusta la ' + texto);
            break;

            case 'naranja':
            console.log('Te gusta la ' + texto);
            break;

            case 'tomate':
            console.log('Te gusta el ' + texto);
            break;
            
            default:
            console.log('No escribiste ninguna fruta.')
            break;
        }
        texto = prompt('Escribe otra fruta que te guste. Para salirte escribe ESC.')
    }
    let sentence = prompt('Escribe una frase o palabra que quieres que se repita');
    let repetir = parseInt(prompt('Elige la cantidad de veces que quieras repetirlo'));
    for(let i = 1; i <= repetir; i++){
        console.log('Frase repetida '+ i + ' vez/veces ' + sentence);
    }
}