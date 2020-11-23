function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", Calcularfrase());
}

function Calcularfrase(){
    //Declarar una variable para leer el id de la ul 
    var salida1 = document.getElementById("imprimirfrase");
//Declaramos una variable que inicialice con 0
    var x = 0;
//compare la x desde el numero "0" hasta el "10"
    while(x < 10){
        //creo el listado con la frase hola mundo 
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = "Hola Mundo";
        salida1.appendChild(lista);
        //se encarga para contar de uno en uno hasta el numero 9
        x++;
    }
}