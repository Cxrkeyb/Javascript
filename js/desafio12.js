$("body").prepend('<div id="hi"><button id="hi">Hola</button><button id="bye">Adiós</button>');
$("body").prepend('<div id="saludo" style="display:flex; gap: 20px;"></div>')
$("#saludo").prepend('<p id="adios" style="background-color: yellow; color: white; width: 100px; height:100px; font-size: 30px; margin: 0; display:flex; justify-content: center; align-items: center; border: 1px solid black;">Adiós</p>')
$("#saludo").prepend('<p id="hola" style="background-color: beige; color: green; width: 100px; height:100px; font-size: 30px; margin: 0; display:flex; justify-content: center; align-items: center; border: 1px solid black;">Hola</p>')
$("#hi").click(() => {
    $("#adios").fadeIn(1000);
    $("#adios").slideUp(1000);
    $("#hola").fadeIn(1000);
    $("#hola").slideDown(1000);
});
$("#bye").click(() => {
    $("#adios").fadeIn(1000);
    $("#adios").slideDown(1000);
    $("#hola").fadeIn(1000);
    $("#hola").slideUp(1000);
});
$("body").prepend('<div id="cuadrado" style="background-color: red; color: white; width: 70px; height: 70px">Soy un cuadrado</div>')
$("#cuadrado").animate({
    "margin": "100px"
}, "slow").delay(6000).animate({
    "margin": "20px"
}, "slow");
$("body").prepend('<div id="cuadrado" style="background-color: yellow; color: black; width: 70px; height: 70px">Soy un cuadrado</div>')
$("#cuadrado").animate({
    "height": "140px",
    "width": "140px"
}, "slow").delay(3000).animate({
    "height": "70px",
    "width": "70px"
}, "slow");