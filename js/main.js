let nombre = prompt('Ingrese su nombre');
let apellido = prompt('Ingrese su apellido');
let edad = prompt('¿Cuál es tú edad?');
let animal = prompt('¿Cuál es tú animal favorito?')

let fechaDeNacimiento = parseInt(edad);


console.log('Bienvenido ',nombre, apellido);
console.log('Tú fecha de nacimiento fue en ' + (2021 - fechaDeNacimiento) + ' ' + 'y tienes ' + edad + ' años');
console.log('Tú animal favorito es el/la ' + animal)
console.log('Dentro de 10 años tendrás ' + (fechaDeNacimiento + 10) + ' años')