function EventListener(){
    document.getElementById("bt1").addEventListener("click", Boton1());
    document.getElementById("bt2").addEventListener("click", Boton2());
    document.getElementById("bt3").addEventListener("click", Boton3());
    document.getElementById("bt4").addEventListener("click", Boton4());
    document.getElementById("bt5").addEventListener("click", Boton5());
}

function Boton1(){
    var listado1 = document.getElementById("listado1");
    listado1.innerText = "";

    var Laptop = {
    TamañoPantalla: 14,
    Mouse: "negro",
    Teclado: "Teclado numerico",
    Color: "gris",		
 	Precio:6073
    };

    var celular = {
    Color:"azul",
	Peso:163,
	TamañoPantalla:7.7,
	Precio:6950
    };

    var Television = {
    Precio:11949,
	TamañoPantalla:55,
	Peso:24.5,
	Altura:74,
    Ancho:121
    };

    var SmartWatch = {
    Ancho:45,
    Altura:41,
    TamañoPantalla:1.2,
    Peso:63
    };

     var aparatoselectronicos1 = {
         marca1: "Laptop Samsung",
         marca2: "Celular Samsung2",
         marca3: "Television Samsung3",
         marca4: "SmartWatch Samsung4"
     };

    var Samsung = {
        marca:aparatoselectronicos1.marca1,
        TamañoPantalla: Laptop.TamañoPantalla,
        Mouse: Laptop.Mouse,
        Teclado: Laptop.Teclado,
        Color: Laptop.Color,
        Precio:Laptop.Precio
    };

    var lista = document.createElement("li");
        lista.setAttribute("class" , "list-group-item");
        lista.innerText = JSON.stringify(Samsung);
        listado1.appendChild(lista);
        //JSON.stringify Es un formato que tiene JavaScript para imprimir el objeto en el navegador


    
    var Samsung2 = {
        marca:aparatoselectronicos1.marca2,
        Color:celular.Color,
        Peso:celular.Peso,
        TamañoPantalla:celular.TamañoPantalla,
        Precio:celular.Precio
    };

    var lista = document.createElement("li");
        lista.setAttribute("class" , "list-group-item");
        lista.innerText = JSON.stringify(Samsung2);
        listado1.appendChild(lista);

    var Samsung3 = {
        marca:aparatoselectronicos1.marca3,
        Precio:Television.Precio,
        TamañoPantalla:Television.TamañoPantalla,
        Peso:Television.Peso,
        Altura:Television.Altura,
        Ancho:Television.Ancho
    };

    var lista = document.createElement("li");
        lista.setAttribute("class" , "list-group-item");
        lista.innerText = JSON.stringify(Samsung3);
        listado1.appendChild(lista);
    
    var Samsung4 = {
        marca:aparatoselectronicos1.marca4,
        Ancho:SmartWatch.Ancho,
        Altura:SmartWatch.Altura,
        TamañoPantalla:SmartWatch.TamañoPantalla,
        Peso:SmartWatch.Peso
    };

    var lista = document.createElement("li");
        lista.setAttribute("class" , "list-group-item");
        lista.innerText = JSON.stringify(Samsung4);
        listado1.appendChild(lista);
}

function Boton2(){
    var listado2 = document.getElementById("listado2");
    listado2.innerText = "";

    var Laptop = {
        TamañoPantalla: 16,
        Mouse: "azul",
        Teclado: "Teclado numerico",
        Color: "negro",		
         Precio:10530
        };
    
        var celular = {
        Color:"negro",
        Peso:163,
        TamañoPantalla:9,
        Precio:9500
        };
    
        var Television = {
        Precio:12560,
        TamañoPantalla:60,
        Peso:24.5,
        Altura:74,
        Ancho:121
        };
    
        var SmartWatch = {
        Ancho:45,
        Altura:41,
        TamañoPantalla:1.1,
        Peso:63
        };

        var aparatoselectronicos2 = {
            marca1: "Laptop Sony",
            marca2: "Celular Sony2",
            marca3: "Television Sony3",
            marca4: "SmartWatch Sony4"
        };

        var Sony = {
            marca:aparatoselectronicos2.marca1,
            TamañoPantalla: Laptop.TamañoPantalla,
            Mouse: Laptop.Mouse,
            Teclado: Laptop.Teclado,
            Color: Laptop.Color,
            Precio:Laptop.Precio
        };
    
        var lista = document.createElement("li");
            lista.setAttribute("class" , "list-group-item");
            lista.innerText = JSON.stringify(Sony);
            listado2.appendChild(lista);
            

        var Sony2 = {
            marca:aparatoselectronicos2.marca2,
            Color:celular.Color,
            Peso:celular.Peso,
            TamañoPantalla:celular.TamañoPantalla,
            Precio:celular.Precio
        };
    
        var lista = document.createElement("li");
            lista.setAttribute("class" , "list-group-item");
            lista.innerText = JSON.stringify(Sony2);
            listado2.appendChild(lista);
    
        var Sony3 = {
            marca:aparatoselectronicos2.marca3,
            Precio:Television.Precio,
            TamañoPantalla:Television.TamañoPantalla,
            Peso:Television.Peso,
            Altura:Television.Altura,
            Ancho:Television.Ancho
        };
    
        var lista = document.createElement("li");
            lista.setAttribute("class" , "list-group-item");
            lista.innerText = JSON.stringify(Sony3);
            listado2.appendChild(lista);
        
        var Sony4 = {
            marca:aparatoselectronicos2.marca4,
            Ancho:SmartWatch.Ancho,
            Altura:SmartWatch.Altura,
            TamañoPantalla:SmartWatch.TamañoPantalla,
            Peso:SmartWatch.Peso
        };
    
        var lista = document.createElement("li");
            lista.setAttribute("class" , "list-group-item");
            lista.innerText = JSON.stringify(Sony4);
            listado2.appendChild(lista);
 }

 function Boton3(){
    var listado3 = document.getElementById("listado3");
    listado3.innerText = "";

    var Laptop = {
        TamañoPantalla: 10,
        Mouse: "blanco",
        Teclado: "Teclado numerico",
        Color: "negro",		
         Precio:13200
        };
    
        var celular = {
        Color:"lila",
        Peso:163,
        TamañoPantalla:9,
        Precio:5630
        };
    
        var Television = {
        Precio:9650,
        TamañoPantalla:25,
        Peso:24.5,
        Altura:74,
        Ancho:121
        };
    
        var SmartWatch = {
        Ancho:45,
        Altura:41,
        TamañoPantalla:1.1,
        Peso:63
        };

        var aparatoselectronicos3 = {
            marca1: "Laptop LG",
            marca2: "Celular LG2",
            marca3: "Television LG3",
            marca4: "SmartWatch LG4"
        };

        var LG = {
            marca:aparatoselectronicos3.marca1,
            TamañoPantalla: Laptop.TamañoPantalla,
            Mouse: Laptop.Mouse,
            Teclado: Laptop.Teclado,
            Color: Laptop.Color,
            Precio:Laptop.Precio
        };
    
        var lista = document.createElement("li");
            lista.setAttribute("class" , "list-group-item");
            lista.innerText = JSON.stringify(LG);
            listado3.appendChild(lista);
            

        var LG2 = {
            marca:aparatoselectronicos3.marca2,
            Color:celular.Color,
            Peso:celular.Peso,
            TamañoPantalla:celular.TamañoPantalla,
            Precio:celular.Precio
        };
    
        var lista = document.createElement("li");
            lista.setAttribute("class" , "list-group-item");
            lista.innerText = JSON.stringify(LG2);
            listado3.appendChild(lista);
    
        var LG3 = {
            marca:aparatoselectronicos3.marca3,
            Precio:Television.Precio,
            TamañoPantalla:Television.TamañoPantalla,
            Peso:Television.Peso,
            Altura:Television.Altura,
            Ancho:Television.Ancho
        };
    
        var lista = document.createElement("li");
            lista.setAttribute("class" , "list-group-item");
            lista.innerText = JSON.stringify(LG3);
            listado3.appendChild(lista);
        
        var LG4 = {
            marca:aparatoselectronicos3.marca4,
            Ancho:SmartWatch.Ancho,
            Altura:SmartWatch.Altura,
            TamañoPantalla:SmartWatch.TamañoPantalla,
            Peso:SmartWatch.Peso
        };
    
        var lista = document.createElement("li");
            lista.setAttribute("class" , "list-group-item");
            lista.innerText = JSON.stringify(LG4);
            listado3.appendChild(lista);
 }

 function Boton4(){
    var listado4 = document.getElementById("listado4");
    listado4.innerText = "";

    var Laptop = {
        TamañoPantalla: 22,
        Mouse: "gris",
        Teclado: "Teclado numerico",
        Color: "blanco",		
        Precio:3650
        };

    var aparatoselectronicos4 = {
    marca1: "Laptop HP"
    };

    var HP = {
        marca:aparatoselectronicos4.marca1,
        TamañoPantalla: Laptop.TamañoPantalla,
        Mouse: Laptop.Mouse,
        Teclado: Laptop.Teclado,
        Color: Laptop.Color,
        Precio:Laptop.Precio
    };
    

    var lista = document.createElement("li");
    lista.setAttribute("class" , "list-group-item");
    lista.innerText = JSON.stringify(HP);
    listado4.appendChild(lista);

}

function Boton5(){
    var listado5 = document.getElementById("listado5");
    listado5.innerText = "";

    var Laptop = {
        TamañoPantalla: 14,
        Mouse: "negro",
        Teclado: "Teclado numerico",
        Color: "azul",		
        Precio:12350
        };

    var aparatoselectronicos5 = {
    marca1: "Laptop Lenovo"
    };

    var Lenovo = {
        marca:aparatoselectronicos5.marca1,
        TamañoPantalla: Laptop.TamañoPantalla,
        Mouse: Laptop.Mouse,
        Teclado: Laptop.Teclado,
        Color: Laptop.Color,
        Precio:Laptop.Precio
    };
    

    var lista = document.createElement("li");
    lista.setAttribute("class" , "list-group-item");
    lista.innerText = JSON.stringify(Lenovo);
    listado5.appendChild(lista);

}


