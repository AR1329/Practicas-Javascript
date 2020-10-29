function EventListener(){
    document.getElementById("Promedio").addEventListener("click", Promedio());
}

function Promedio(){

    var cal1 = Number (document.getElementById("Primera Calificacion").value);

    var cal2 = Number (document.getElementById("Segunda Calificacion").value);

    var cal3 = Number (document.getElementById("Tercera Calificacion").value);

    var cal4 = Number (document.getElementById("Cuarta Calificacion").value);

    var ImprimirInformacion = document.getElementById("Promedio");

    var ImprimirInformacion2 = document.getElementById("Minimo");

    var Promedio = 0 
    var Minimo = 0


    if(cal1 < cal2 && cal1 < cal3 && cal1 < cal4){
        Minimo = Math.min (cal1, cal2, cal3, cal4);
        Promedio = (cal2 + cal3 + cal4) /3;
        ImprimirInformacion2.innerText = "La calificacion minima es:" + Minimo;
        ImprimirInformacion.innerText = "El promedio es:" + Promedio;
    }
    if(cal2 < cal1 && cal2 < cal3 && cal2 < cal4){
        Minimo = Math.min (cal1, cal2, cal3, cal4);
        Promedio = (cal1 + cal3 + cal4) /3;
        ImprimirInformacion2.innerText = "La calificacion minima es:" + Minimo;
        ImprimirInformacion.innerText = "El promedio es:" + Promedio;
    }
    if(cal3 < cal1 && cal3 < cal2 && cal3 < cal4){
        Minimo = Math.min (cal1, cal2, cal3, cal4);
        Promedio = (cal1 + cal2 + cal4) /3;
        ImprimirInformacion2.innerText = "La calificacion minima es:" + Minimo;
        ImprimirInformacion.innerText = "El promedio es:" + Promedio;
    }
    if(cal4 < cal1 && cal4 < cal2 && cal4 < cal3){
        Minimo = Math.min (cal1, cal2, cal3, cal4);
        Promedio = (cal1 + cal3 + cal2) /3;
        ImprimirInformacion2.innerText = "La calificacion minima es:" + Minimo;
        ImprimirInformacion.innerText = "El promedio es:" + Promedio;
    }


} 