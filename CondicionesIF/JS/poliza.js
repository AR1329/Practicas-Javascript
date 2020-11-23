function EventListener(){
    document.getElementById("calculo").addEventListener("click", Calcularprecio())
}

function Calcularprecio(){

    var plan = document.getElementById("plan").value;
    var plus = document.getElementById("cargo").value;
    var imprimir = document.getElementById("imprimirprecio");
    var CA = 1200;
    var DT = 950;
    var alcohol = 1.1;
    var lentes = 1.05;
    var enfermedad = 1.05;
    var senil = 1.2;
    var joven = 1.1;
    var total = 0;

    if(plan == 1 && plus == 3){
        total = CA * alcohol;
        imprimir.innerText= "Usted a escogido el plan de Cobertura Amplia con un costo base de $" + CA + " mas el costo añadido seria un total de $" + total;
    }
    if(plan == 1 && plus == 4){
        total = CA * lentes;
        imprimir.innerText= "Usted a escogido el plan de Cobertura Amplia con un costo base de $" + CA + " mas el costo añadido seria un total de $" + total;
    }
    if(plan == 1 && plus == 5){
        total = CA * enfermedad;
        imprimir.innerText= "Usted a escogido el plan de Cobertura Amplia con un costo base de $" + CA + " mas el costo añadido seria un total de $" + total;
    }
    if(plan == 1 && plus == 6){
        total = CA * senil;
        imprimir.innerText= "Usted a escogido el plan de Cobertura Amplia con un costo base de $" + CA + " mas el costo añadido seria un total de $" + total;
    }
    if(plan == 1 && plus == 7){
        total = CA * joven;
        imprimir.innerText= "Usted a escogido el plan de Cobertura Amplia con un costo base de $" + CA + " mas el costo añadido seria un total de $" + total;
    }



    if(plan == 2 && plus == 3){
        total = DT * alcohol;
        imprimir.innerText= "Usted a escogido el plan de Cobertura Amplia con un costo base de $" + DT + " mas el costo añadido seria un total de $" + total;
    }
    if(plan == 2 && plus == 4){
        total = DT * lentes;
        imprimir.innerText= "Usted a escogido el plan de Cobertura Amplia con un costo base de $" + DT + " mas el costo añadido seria un total de $" + total;
    }
    if(plan == 2 && plus == 5){
        total = DT * enfermedad;
        imprimir.innerText= "Usted a escogido el plan de Cobertura Amplia con un costo base de $" + DT + " mas el costo añadido seria un total de $" + total;
    }
    if(plan == 2 && plus == 6){
        total = DT * senil;
        imprimir.innerText= "Usted a escogido el plan de Cobertura Amplia con un costo base de $" + DT + " mas el costo añadido seria un total de $" + total;
    }
    if(plan == 2 && plus == 7){
        total = DT * joven;
        imprimir.innerText= "Usted a escogido el plan de Cobertura Amplia con un costo base de $" + DT + " mas el costo añadido seria un total de $" + total;
    }

} 