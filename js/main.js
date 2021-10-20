// Desafio 1
function desafio1() {
    let nombre = prompt('Ingrese su nombre');
    let apellido = prompt('Ingrese su apellido');
    let edad1 = prompt('¿Cuál es tú edad?');
    let animal = prompt('¿Cuál es tú animal favorito?')
    let fechaDeNacimiento = parseInt(edad1);

    console.log('Bienvenido ', nombre, apellido);
    console.log('Tú fecha de nacimiento fue en ' + (2021 - fechaDeNacimiento) + ' ' + 'y tienes ' + edad1 + ' años');
    console.log('Tú animal favorito es el/la ' + animal);
    console.log('Dentro de 10 años tendrás ' + (fechaDeNacimiento + 10) + ' años');
}
// Desafio 2
function desafio2() {
    let edad2 = prompt('¿Cuantos años tienes?');
    let mayoria = parseInt(edad2);
    let fruta = prompt('¿Qué fruta prefieres manzana o pera?');
    let numero = prompt('Escribe un número');
    let numint = parseInt(numero);
    let saludo = prompt('Escribe "hola"');

    if (mayoria >= 18) {
        alert('Eres mayor de edad. Tú edad es ' + mayoria);
    } else if (mayoria < 18) {
        alert('Eres menor de edad. Tú edad es ' + mayoria);
    } else {
        alert('No escribiste tú edad.');
    }

    if (fruta == 'manzana') {
        alert('Prefieres la ' + fruta);
    } else if (fruta == 'pera') {
        alert('Prefieres la ' + fruta);
    } else {
        alert('No escribiste la fruta.');
    }

    if ((numint >= 10) && (numint < 50)) {
        alert('El número está entre el 10 y el 50.');
    }

    if (saludo == 'hola') {
        alert('Escribiste hola');
    } else {
        console.log('No escribiste hola.');
    }
}

function desafio3() {
    let edad = parseInt(prompt('¿Cuál es tu edad?'));
    let año = 2021;
    for (let i = edad; i <= 30; i++, año++) {
        console.log('En el ' + año + ' tendrás ' + i + ' años.');
    }
    let texto = prompt('¿Cuál es tu fruta favorita? Para salirte escribe ESC.');
    while (texto != "ESC") {
        switch (texto) {
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
    for (let i = 1; i <= repetir; i++) {
        console.log('Frase repetida ' + i + ' vez/veces ' + sentence);
    }
}

function desafio4store() {
    const egg = 3;
    const milk = 15;
    const chocolate = 6;
    const bread = 4;
    const coffee = 9;
    let addition = 0;
    let text = prompt('Type the product what do you want. List of products: egg, milk, chocolate, bread and coffee. If you do want to exit out type "ESC".');
    while (text != "ESC") {
        switch (text) {
            case 'egg':
                addition = addition + egg;
                console.log('Product added successfully');
                break;

            case 'milk':
                addition = addition + milk;
                console.log('Product added successfully');
                break;

            case 'chocolate':
                addition = addition + chocolate;
                console.log('Product added successfully');
                break;

            case 'bread':
                addition = addition + bread;
                console.log('Product added successfully');
                break;

            case 'coffee':
                addition = addition + coffee;
                console.log('Product added successfully');
                break;

            default:
                console.log('Product not found');
                break;
        }
        text = prompt('Type another product. List of products: egg, milk, chocolate, bread and coffee. If you do want to exit out type "ESC".');
    }
    alert('The addition of the prices are ' + addition);
}

function desafio4fee() {
    let price = parseInt(prompt('Type the amount of the product.'));
    let monthfee = (parseInt(prompt('Type the fee for the quota. (Type 1 = 1%)')) / 100);
    let monthquantity = parseInt(prompt('Type the amount of months.'));
    const addition = (a, b) => a + b;
    const iva = (a, b) => a * monthfee;

    for (i = 0; i <= monthquantity; i++) {
        price = addition(price, iva(price));
    }
    console.log('The amount final of all the quotas ' + parseInt(price));
}

function desafio4discount() {
    const iva = (a, b) => a * 0.21;
    const addition = (a, b) => a + b;
    const substraction = (a, b) => a - b;
    let price = parseInt(prompt('Type the product price.'));
    let discount = (parseInt(prompt('Type the discount. (Type 1 = 1%)')) / 100);
    const priceDiscounted = (a, b) => a * discount;
    price = addition(price, iva(substraction(price, (priceDiscounted(price)))));
    console.log('The final price with iva and discounts are ' + price)
}

function desafio4iva() {
    let price = parseInt(prompt('Type the amount of the product.'));
    const iva = (a, b) => a * 0.21;
    const addition = (a, b) => a + b;

    price = addition(price, iva(price));
    console.log('The price with the Iva is ' + price);
}

function desafio4multiple() {
    let nmultiple = parseInt(prompt('Type the number you want to be the multiple'));
    let nverify = parseInt(prompt('Type the number you want to be the verify'));

    function multiple(a, b) {
        if (Number.isInteger(b / a)) {
            return 'its multiple';
        }
        return 'its not multiple';
    }
    console.log(multiple(nverify, nmultiple));
}

function desafio4wavef() {
    let velocity = parseFloat(prompt('Type the velocity in m/s'));
    let lenght = parseFloat(prompt('Type the wave lenght in m'));
    const divide = (a, b) => a / b;

    frecuency = divide(velocity, lenght);
    console.log('The frecuency is ' + frecuency + ' Hz')
}

function desafio5KD() {
    class Object {
        constructor(user, kills, deaths) {
            this.user = user;
            this.kills = Number(kills);
            this.deaths = Number(deaths);
        }
        get product() {
            return this.user;
        }
        get KD() {
            return (this.kills / this.deaths);
        }
        userInfo() {
            return `The KD of ${this.user} is ${this.KD}`;
        }
    }
    const user = new Object(prompt('Type the user.'), prompt('Type the quantity total of kills'), prompt('Type the quantity total of deaths'));

    console.log(user.userInfo());
}

function desafio5Average() {
    let totalgrades = 3;
    class schoolgrades {
        constructor(student, grade1, grade2, grade3) {
            this.student = student;
            this.grade1 = Number(grade1);
            this.grade2 = Number(grade2);
            this.grade3 = Number(grade3);
        }
        get nameStudent() {
            return this.student;
        }
        get average() {
            return ((this.grade1 + this.grade2 + this.grade3) / totalgrades).toFixed(2);
        }
        getAverage() {
            if (this.average > gradepass) {
                return `The student ${this.student} approved, the course, his average was ${this.average}`
            } else {
                return `The student ${this.student} reprobate the course, his average was ${this.average}`
            }
        }
    }
    const quantityOfStudents = 3;
    const student = [];
    const gradepass = prompt('Grade to approve the course');
    for (i = 1; i <= quantityOfStudents; i++) {
        student[i] = new schoolgrades(prompt('Type the name of the student.'), prompt('Type the first grade'), prompt('Type the second grade.'), prompt('Type the third grade'));
    }
    alert('The condition of the students are:' +
        '\n' + student[1].getAverage() +
        '\n' + student[2].getAverage() +
        '\n' + student[3].getAverage());
}

function desafio6square() {
    const array = [];
    let quantity = parseInt(prompt("Type the quantity of numbers inside the array"));
    for (i = 1; i <= quantity; i++) {
        array.push(prompt("Type a number"))
    }
    const square = array.map(x => x * x);
    console.log(array.join('\n'));
    console.log("Squares in order " + square);
}

function desafio6minimarket() {

    const minimarket = [{
            id: 1,
            name: "banana",
            price: 150
        },
        {
            id: 2,
            name: "grapple",
            price: 30
        },
        {
            id: 3,
            name: "apple",
            price: 50
        }
    ];

    for (const product of minimarket) {
        console.log(product.name);
        console.log(product.price + "$");
    }
}

function desafio6sorting() {
    listPersons = [
        {id: 1, name: "Juan", age: 14},
        {id: 2, name: "Angela", age: 18},
        {id: 3, name: "Wilson", age: 16},
        {id: 4, name: "Sneyder", age: 24},
        {id: 5, name: "Toby", age: 21},
        {id: 6, name: "Princesa", age: 8}]
    
    listPersons.sort(function(a,b){
        return (a.age - b.age)
    })
    console.log(listPersons);
}

function firstfinalproyect(){
    const array = [];
    let quantity = parseInt(prompt("Type the quantity of numbers for calculate"));
    for (i = 1; i <= quantity; i++) {
        array.push(parseFloat(prompt("Type a number")));
    }
    operation = prompt("Type the operation by the number\n 1. Addition  \n 2. Subtraction \n 3. Multiplication \n 4. Division \n 5. Square \n 6. Squareroot");
    switch (operation){
        case '1':
            let addition = parseFloat(prompt("What do you want to add?"));
            console.log(array.join('\n'));
            const adittionarray = array.map(x => x+=addition);
            console.log("Adittions in order are " + adittionarray);
            break;
        case '2':
            let substraction = parseFloat(prompt("What do you want to substract?"));
            console.log(array.join('\n'));
            const substractionarray = array.map(x => x-substraction);
            console.log("Substractions in order are " + substractionarray);
            break;
        case '3':
            let multiplication = parseFloat(prompt("What do you want to multiply?"));
            console.log(array.join('\n'));
            const multiplicationarray = array.map(x => x*multiplication);
            console.log("Multiplications in order are " + multiplicationarray );
            break;
        case '4':
            let division = parseFloat(prompt("What do you want to divide?"));
            console.log(array.join('\n'));
            const divisionarray = array.map(x => x/division);
            console.log("Divisions in order are " + divisionarray );
            break;  
        case '5':
            console.log(array.join('\n'));
            const sqrt = array.map(x => Math.sqrt(x));
            console.log("Squareroots in order are " + sqrt);
            break;
        case '6':
            console.log(array.join('\n'));
            const square = array.map(x => x * x);
            console.log("Squares in order are " + square);
            break;
        default:
            console.log("You did not select any operation")
    }
}
function desafio7(){
    let nombre = prompt("Escribe tú nombre.")
    let parrafo = document.createElement("p");
    let price = parseInt(prompt('Escribe el precio del prestamo.'));
    let monthfee = (parseInt(prompt('Escribe la tasa de interés. (Escribe 1 para 1%)')) / 100);
    let monthquantity = parseInt(prompt('Escribe la cantidad de meses a pagar.'));
    const addition = (a, b) => a + b;
    const iva = (a, b) => a * monthfee;
    for (i = 0; i <= monthquantity; i++) {
        price = addition(price, iva(price));
    }
    parrafo.innerHTML = `<p>Hola ${nombre} el precio del producto con iva es ${parseInt(price)} pesos argentinos<p>`
    document.body.appendChild(parrafo);
}
// DESAFIO CLASE 9
// Obtener valores del html
let numero2 = document.getElementById("valor2");
let btn_suma = document.getElementById("suma");
let btn_resta = document.getElementById("resta");
let btn_multiplicar = document.getElementById("multiplicar");
let btn_dividir = document.getElementById("dividir");
let parrafo = document.createElement("p");

//  Enter funcionando, no entiendo porque cuando tengo el enter así no me deja escribir solo con las flechitas del form
// function enter(e){
//     e.preventDefault();
//     if (e.keyCode == 13)
//     parrafo.innerHTML = `<p>No seleccionaste ninguna operación<p>`
//     document.body.appendChild(parrafo);;
// }
// window.onkeydown = enter;
//Funciones de los botones
function suma(){
    let numero1 = parseFloat(document.getElementById("valor1").value)
    let numero2 = parseFloat(document.getElementById("valor2").value)
    let total = numero1 + numero2;
    parrafo.innerHTML = `<p>Bienvenido el primer número que digitó es ${numero1} y el segundo número es ${numero2}, el resultado de la operación es ${total}<p>`
    document.body.appendChild(parrafo);
}
function resta(){
    let numero1 = parseFloat(document.getElementById("valor1").value)
    let numero2 = parseFloat(document.getElementById("valor2").value)
    let total = numero1 - numero2;
    parrafo.innerHTML = `<p>Bienvenido el primer número que digitó es ${numero1} y el segundo número es ${numero2}, el resultado de la operación es ${total}<p>`
    document.body.appendChild(parrafo);
}

function multiplicar(){
    let numero1 = parseFloat(document.getElementById("valor1").value)
    let numero2 = parseFloat(document.getElementById("valor2").value)
    let total = numero1 * numero2;
    parrafo.innerHTML = `<p>Bienvenido el primer número que digitó es ${numero1} y el segundo número es ${numero2}, el resultado de la operación es ${total}<p>`
    document.body.appendChild(parrafo);
}
function dividir(){
    let numero1 = parseFloat(document.getElementById("valor1").value)
    let numero2 = parseFloat(document.getElementById("valor2").value)
    let total = numero1 / numero2;
    parrafo.innerHTML = `<p>Bienvenido el primer número que digitó es ${numero1} y el segundo número es ${numero2}, el resultado de la operación es ${total}<p>`
    document.body.appendChild(parrafo);
}

// DESAFIO COMPLEMENTARIO
// Obtener valores del HTML
let addtp = document.getElementById("addtp");
let titulopubhtml = document.createElement("h2");
let parrafopubhtml = document.createElement("p");
 

function addTandP(e){
    let titulopub = document.getElementById("titulopub").value;
    let parrafopub = document.getElementById("parrafopub").value;
    titulopubhtml.innerHTML = `<h2>${titulopub}</h2>`
    parrafopubhtml.innerHTML = `<p>${parrafopub}</p>`
    document.body.appendChild(titulopubhtml);
    document.body.appendChild(parrafopubhtml);
}