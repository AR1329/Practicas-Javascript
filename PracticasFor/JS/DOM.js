//LA función solo se utiliza para mandar llamar los botones
function EventListener(){
    //Mandar llamar al boton1 
    document.getElementById("click").addEventListener("click", Darleclick());
    //Mandar llamar al boton2
    document.getElementById("click2").addEventListener("click", Darleclick2());
    document.getElementById("click3").addEventListener("click", darleclick3());
}

function Darleclick(){

      var salida = document.getElementById("salida1");

      //create element se utiliza para crear una etiqueta en javascript
      var boton = document.createElement("button");
      //Darle forma al boton en el html
      boton.setAttribute("class", "btn btn-primary btn-lg btn-block");
      //Darle un texto al boton 
      boton.innerText = "Boton impreso";
      //se utiliza para imprimir el boton en el html
      salida.appendChild(boton);
}

function Darleclick2(){
    
    var salida2 = document.getElementById("salida2");
    
    for(var x=0; x < 5; x++){
        
        //se crea un button en javascript
        var boton = document.createElement("button");
        //se crean los atributos del boton
        boton.setAttribute("class" , "btn btn-primary btn-lg btn-block");
        boton.setAttribute("id" , "click");
        boton.setAttribute("type" , "button");
        boton.setAttribute("onclick" , "click2()");
        //se le agrega un texto al boton 
        boton.innerText = "Varios Botones Impresos";
        //se imprime el boton en el jumbotron
        salida2.appendChild(boton);
    }
}

function darleclick3(){
    // var salida3 = document.getElementById("salida3");
    var listado = document.getElementById("listado");

    for(var x=0; x<5; x++){
        var lista = document.createElement("li");
        lista.setAttribute("class" , "list-group-item");
        lista.innerText = x;
        listado.appendChild(lista);
    }
}