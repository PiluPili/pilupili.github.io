var personas = 0
var montototal = 0

function getinputs(){
    var nombre = document.getElementById("InputNombre").value;
    var consumo = document.getElementById("InputConsumo").value;
    personas = personas + 1;
    montototal = montototal + parseFloat(consumo);
    
}

function listado(consumo){
    var listado = document.getElementById("Listado");
    if (consumo !=0 && nombre !=""){
        var lista = createElement("lista");
        lista.innerText = nombre + " $ " + consumo.parseFloat();
        listado.appendChild(lista)
    } 
}


function dividir(montototal, personas){
    var total = montototal/personas
    document.getElementById("aporte").innerText = total
    prompt(total)
}


function resolver() {
    getinputs();
    listado()
    dividir();
}