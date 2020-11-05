function EventListerner(){
    document.getElementById("semana"). addEventListener("click", calcularsemana())
}

function calcularsemana(){

    var dia = document.getElementById("dias").value;

    var imprimirresultado = document.getElementById("imprimirdiasemana");

    if(dia == "1"){
        imprimirresultado.innerText = "Lunes";
    }
    if(dia == "2"){
        imprimirresultado.innerText = "Martes";
    }
    if(dia == "3"){
        imprimirresultado.innerText = "Miercoles";
    }
    if(dia == "4"){
        imprimirresultado.innerText = "Jueves";
    }
    if(dia == "5"){
        imprimirresultado.innerText = "Viernes";
    }
    if(dia == "6"){
        imprimirresultado.innerText = "Sabado";
    }
    if(dia == "7"){
        imprimirresultado.innerText = "Domingo";
    }
}