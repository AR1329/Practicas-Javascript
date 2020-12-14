function EventListener(){
    document.getElementById("valeres").addEventListener("click", Booleanos());
}

function Booleanos(){

    var salida = document.getElementById("salida")

    var b1 = Boolean(100);
    var b2 = Boolean(3.14);
    var b3 = Boolean(-15);
    var b4 = Boolean("Hello");
    var b5 = Boolean('false');
    var b6 = Boolean(1 + 7 + 3.14);
    var b7 = Boolean(5 > 4);
    var b8 = Boolean(0);
    var b9 = Boolean(-0);
    var b10 = Boolean("");
    var b11 = Boolean();
    var b12 = Boolean(null);
    var b13 = Boolean(false);
    var b14 = Boolean(10 / "H");


    var alert = document.createElement("div");
    alert.setAttribute("class", "alert alert-secondary");
    alert.setAttribute("role", "alert");
    alert.innerText = "El numero 100 en booleano es " + b1;
    salida.appendChild(alert);

    var alert2 = document.createElement("div");
    alert2.setAttribute("class", "alert alert-secondary");
    alert2.setAttribute("role", "alert");
    alert2.innerText = "El numero 3.14 en boleano es " + b2;
    salida.appendChild(alert2);

    var alert3 = document.createElement("div");
    alert3.setAttribute("class", "alert alert-secondary");
    alert3.setAttribute("role", "alert");
    alert3.innerText = "El numero -15 en boleano es: " + b3;
    salida.appendChild(alert3);

    var alert4 = document.createElement("div");
    alert4.setAttribute("class", "alert alert-secondary");
    alert4.setAttribute("role", "alert");
    alert4.innerText = "La palabra 'hello' en booleano es: " + b4;
    salida.appendChild(alert4);

    var alert5 = document.createElement("div");
    alert5.setAttribute("class", "alert alert-secondary");
    alert5.setAttribute("role", "alert");
    alert5.innerText = "La palabra 'false' en booleano es: " + b5;
    salida.appendChild(alert5);

    var alert6 = document.createElement("div");
    alert6.setAttribute("class", "alert alert-secondary");
    alert6.setAttribute("role", "alert");
    alert6.innerText = "La suma de los numeros en booleno es: " + b6;
    salida.appendChild(alert6);

    var alert7 = document.createElement("div");
    alert7.setAttribute("class", "alert alert-secondary");
    alert7.setAttribute("role", "alert");
    alert7.innerText = "La comparacion en booleano es: " + b7;
    salida.appendChild(alert7);

    var alert8 = document.createElement("div");
    alert8.setAttribute("class", "alert alert-secondary");
    alert8.setAttribute("role", "alert");
    alert8.innerText = "El numero 0 en booleano es: " + b8;
    salida.appendChild(alert8);

    var alert9 = document.createElement("div");
    alert9.setAttribute("class", "alert alert-secondary");
    alert9.setAttribute("role", "alert");
    alert9.innerText = "El numero -0 en booleano es:" + b9;
    salida.appendChild(alert9);

    var alert10 = document.createElement("div");
    alert10.setAttribute("class", "alert alert-secondary");
    alert10.setAttribute("role", "alert");
    alert10.innerText = "Las comillas vacias en booleano es: " + b10;
    salida.appendChild(alert10);

    var alert11 = document.createElement("div");
    alert11.setAttribute("class", "alert alert-secondary");
    alert11.setAttribute("role", "alert");
    alert11.innerText = "El valor sin dato en booleano es: " + b11;
    salida.appendChild(alert11);

    var alert12 = document.createElement("div");
    alert12.setAttribute("class", "alert alert-secondary");
    alert12.setAttribute("role", "alert");
    alert12.innerText = "La palabra nulo en booleano es: " + b12;
    salida.appendChild(alert12);

    var alert13 = document.createElement("div");
    alert13.setAttribute("class", "alert alert-secondary");
    alert13.setAttribute("role", "alert");
    alert13.innerText = "La palabra false en booleano es:" + b13;
    salida.appendChild(alert13);

    var alert14 = document.createElement("div");
    alert14.setAttribute("class", "alert alert-secondary");
    alert14.setAttribute("role", "alert");
    alert14.innerText = "La division con un numero con letra en booleano es: " + b14;
    salida.appendChild(alert14);

} 