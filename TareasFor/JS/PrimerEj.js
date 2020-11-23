function Eventlistener(){
    document.getElementById("num").addEventListener("click", imprimirnumeros());
}
function imprimirnumeros(){
    var Imprimirlista = document.getElementById("Imprimirlista");
    Imprimirlista.innerText = "";
    
    for(var x=1; x<=20; x++){
       
        var numero = document.createElement("li");
        numero.setAttribute("class", "list-group-item mt-2");
        numero.innerText = x;
        Imprimirlista.appendChild(numero);
    }
}



