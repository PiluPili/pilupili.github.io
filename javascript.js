let people = []
let amount = []
personas = 0
montototal = 0

function getinputs(){
    if  (personas != 0)
    people.push(document.getElementById("InputNombre"));
    amount.push(document.getElementById("InputConsumo").value);
    personas = personas + 1;
    montototal = montototal + parseFloat(consumo);
    console.log(personas)
}

function dividir(montototal, personas){
    var total = montototal/personas
}

function resultado() {
    display = "A cada uno le toca aportar $" + total.value;
    document.getElementById("aporte").innerText = display;
}

//function lista(){
   // document.getElementById("listado").innerText = 
//}

function resolver() {
    getinputs();
    dividir();
    resultado();
}