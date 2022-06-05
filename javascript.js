//let people = []
//let amount = []
var personas = 0
var montototal = 0

function getinputs(){
    //people.push(document.getElementById("InputNombre"));
    //amount.push(document.getElementById("InputConsumo").value);
    var nombre = document.getElementById("InputNombre");
    var consumo = document.getElementById("InputConsumo").value;
    personas = personas + 1;
    montototal = montototal + parseFloat(consumo)
}

function listado(consumo, nombre){
    var listado = document.getElementById("Listado")
    if (consumo !=0 && nombre !=""){
        var perscons = nombre.parseFloat + " $ " + consumo.parseFloat
        listado.appendChild(nombre + "$")
    }
    //document.getElementById("listado").innerText   
}

function dividir(montototal, personas){
    var total = montototal/personas
    document.getElementById("aporte").innerText = total
}


function resolver() {
    getinputs();
    dividir();
}