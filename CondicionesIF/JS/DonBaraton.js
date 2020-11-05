function EventListener(){
    document.getElementById("CalculraDescuento").addEventListener("click", Descuento());
}
function Descuento(){
    var Numero1 = Number (document.getElementById("Numero1").value);

    var ImprimirTotal = document.getElementById("ImprimirTotal");

    var ImprimirDescuento = document.getElementById("ImprimirDescuento");

    var Descuento1 = 0.84

    var Descuento2 = 0.93

    var Descuento3 = 0.16

    var Descuento4 = 0.7

    if(Numero1 >= 3600){
        Descuento1 = (Numero1) *.84;
        Descuento3 = (Numero1) *.16;
        ImprimirTotal.innerText = "El precio final de tu traje es $:" + Descuento1;
        ImprimirDescuento.innerText = "Descuento de 16%:" + Descuento3;
    }
    if(Numero1 < 3600){
        Descuento2 = (Numero1) *.93;
        Descuento4 = (Numero1) *.07;
        ImprimirTotal.innerText = "El precio final de tu traje es $:" + Descuento2;
        ImprimirDescuento.innerText = "Descuento de 7%:" + Descuento4;
    }
}