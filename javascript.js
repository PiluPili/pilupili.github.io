var personas = 0
var montototal = 0

function getinputs(){
    var nombre = document.getElementById("InputNombre").value;
    var consumo = document.getElementById("InputConsumo").value;
    var listado = document.getElementById("Listado");
    if (consumo !=0 && nombre !=""){
        var lista = document.createElement("lista");
        lista.innerText = nombre + ": $ " + parseFloat(consumo);
        listado.appendChild(lista);
        personas = personas + 1;
        montototal = montototal + parseFloat(consumo);
        nombre.value = "";
        consumo.value = "";
    } 
}

function dividir(monto, people){
    var total = monto/people;
    document.getElementById("aporte").innerText = total;
}

function resolver() {
    getinputs();
    dividir(montototal, personas);
}

function reiniciar() {
    personas = 0;
    montototal = 0;
    total = "";
    nombre = "";
    consumo = "";
    listado = "";
}