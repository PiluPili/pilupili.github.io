var montototal = 0
var personas = 0

function formulario(montototal, personas) {
    var nombre = document.getElementById("InputNombre").value;
    var consumo = document.getElementById("InputConsumo").value;
    if (nombre !="" && consumo !=""){
        personas = personas + 1;
        montototal = montototal + parseFloat(consumo);
    }
}

function aporte (montototal, personas) {
    if  (personas != 0 && montototal != 0) {
        var aportan = (montototal/personas).toString();
        return aportan;
    } else {
        aportan = 0;
    }
}

function resultado(aportan) {
    display = "A cada uno le toca aportar" + aportan;
    document.getElementById("aporte").innerText = display;
}

function resolver() {
    formulario();
    aporte();
    resultado();
}