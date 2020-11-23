function EventListener(){
    document.getElementById("calculardias").addEventListener("click", Calculardiassemana());
}
function Calculardiassemana(){

    var diasemana = String(document.getElementById("dias").value);
    var imprimirdiacorrespondiente = document.getElementById("imprimirdiacorrespondiente");

    if(diasemana == "Lunes"){
        imprimirdiacorrespondiente.innerText = "Ya es Lunes";
    }
    else if(diasemana == "Viernes"){
        imprimirdiacorrespondiente.innerText = "Por fin es Viernes";
    }
    else if(diasemana == "Sabado" || diasemana == "Domingo"){
        imprimirdiacorrespondiente.innerText = "Son dias para descansar";
    }
    else{
        imprimirdiacorrespondiente.innerText = "Sin actividades";
    }

}