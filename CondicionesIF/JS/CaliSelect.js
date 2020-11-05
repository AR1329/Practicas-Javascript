function Eventlistener(){
    document.getElementById("Cal").addEventListener("click", CalcularCal());
}

function CalcularCal(){
    var SelectCal = String(document.getElementById("Calificaciones").value);
    var ImprimirCalificacion = document.getElementById("ImprimirCalificacion");
    
    if (SelectCal == "10"){
        ImprimirCalificacion.innerText = "Tu Calificación es A";
    }
    if (SelectCal == "9"){
        ImprimirCalificacion.innerText = "Tu Calificación es B";
    }
    if (SelectCal == "8"){
        ImprimirCalificacion.innerText = "Tu Calificación es C";
    }
    if (SelectCal == "7"){
        ImprimirCalificacion.innerText = "Tu Calificación es D";
    }
    if (SelectCal == "6"){
        ImprimirCalificacion.innerText = "Tu Calificación es D";
    }
    if (SelectCal == "5"){
        ImprimirCalificacion.innerText = "Tu Calificación es F";
    }
    if (SelectCal == "4"){
        ImprimirCalificacion.innerText = "Tu Calificación es F";
    }
    if (SelectCal == "3"){
        ImprimirCalificacion.innerText = "Tu Calificación es F";
    }
    if (SelectCal == "2"){
        ImprimirCalificacion.innerText = "Tu Calificación es F";
    }
    if (SelectCal == "1"){
        ImprimirCalificacion.innerText = "Tu Calificación es F";
    }
    if (SelectCal == "0"){
        ImprimirCalificacion.innerText = "Tu Calificación es F";
    }
    }