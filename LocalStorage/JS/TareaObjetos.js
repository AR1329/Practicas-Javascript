function Persona1(){

    var persona = {
        Nombre: "Angela",
        Apellido: "Rodriguez",
        Edad: 19,
        Genero: "Femenino",
        Nacionalidad: "Mexicana",
    }

    localStorage.setItem("Nombre", persona.Nombre);
    localStorage.setItem("Apellido", persona.Apellido);
    localStorage.setItem("Edad", persona.Edad);
    localStorage.setItem("Genero", persona.Genero);
    localStorage.setItem("Nacionalidad", persona.Nacionalidad);

}

function Persona2(){

    var persona = {
        Nombre: "Angela",
        Apellido: "Rodriguez",
        Edad: 19,
        Genero: "Femenino",
        Nacionalidad: "Mexicana",
    }

    var Inf1 = document.getElementById("P1");
    var Inf2 = document.getElementById("P2");
    var Inf3 = document.getElementById("P3");
    var Inf4 = document.getElementById("P4");
    var Inf5 = document.getElementById("P5");

    Inf1.innerText = "Nombre: " + persona.Nombre;
    Inf2.innerText = "Apellido: " + persona.Apellido;
    Inf3.innerText = "Edad: " + persona.Edad;
    Inf4.innerText = "Genero: " + persona.Genero;
    Inf5.innerText = "Nacionalidad: " + persona.Nacionalidad;

}


function Comida1(){

    var comida = {
        Mexicana: "Mole",
        España: "Paella ",
        Fancesa: "Ratatouille",
        Italiana: "Pizza",
        Estadounidense: "Hotdog"
    }  

    localStorage.setItem("Una Comida Mexicana", comida.Mexicana);
    localStorage.setItem("Una Comida Española", comida.España);
    localStorage.setItem("Una Comida Francesa", comida.Fancesa);
    localStorage.setItem("Una Comida Italiana", comida.Italiana);
    localStorage.setItem("Una Comida Estadounidense", comida.Estadounidense);

}

function Comida2(){

    var comida = {
        Mexicana: "Mole",
        España: "Paella",
        Fancesa: "Ratatouille",
        Italiana: "Pizza",
        Estadounidense: "Hotdog"
    }  

    var Inf6 = document.getElementById("C1");
    var Inf7 = document.getElementById("C2");
    var Inf8 = document.getElementById("C3");
    var Inf9 = document.getElementById("C4");
    var Inf10 = document.getElementById("C5");

    Inf6.innerText = "Una Comida Mexicana: " + comida.Mexicana;
    Inf7.innerText = "Una Comida Española: " + comida.España;
    Inf8.innerText = "Una Comida Francesa: " + comida.Fancesa;
    Inf9.innerText = "Una Comida Italiana: " + comida.Italiana;
    Inf10.innerText = "Una Comida Estadounidense: " + comida.Estadounidense;

}


function Peliculas1(){

    var Peliculas = {
        Terror: "La posesión de Verónica",
        Comedia: "Ahí te encargo",
        Ficción: "La rebelión",
        Romanticas:	"Yo antes de ti",
    }

    localStorage.setItem("Pelicula de Terror", Peliculas.Terror);
    localStorage.setItem("Pelicula de Comedia", Peliculas.Comedia);
    localStorage.setItem("Pelicula de Ficcion", Peliculas.Ficción);
    localStorage.setItem("Pelicula Romanticas", Peliculas.Romanticas);

}


function Peliculas2(){

    var Peliculas = {
        Terror: "La posesión de Verónica",
        Comedia: "Ahí te encargo",
        Ficción: "La rebelión",
        Romanticas:	"Yo antes de ti",
    }

    var Inf11 = document.getElementById("Pe1");
    var Inf12 = document.getElementById("Pe2");
    var Inf13 = document.getElementById("Pe3");
    var Inf14 = document.getElementById("Pe4");

    Inf11.innerText = "Pelicula de Terror: " + Peliculas.Terror;
    Inf12.innerText = "Pelicula de Comedia: " + Peliculas.Comedia;
    Inf13.innerText = "Pelicula de Ficción: " + Peliculas.Ficción; 
    Inf14.innerText = "Pelicula Romantica: " + Peliculas.Romanticas;
}


function Musica1(){

    var Musica = {
        Rock:"Rayando el sol",
        Pop: "Dance Monkey",
        HipHop: "Lose Yourself",
        Reggaeton: "Gasolina",
    }

    localStorage.setItem("Musica Rock", Musica.Rock);
    localStorage.setItem("Musica Pop", Musica.Pop);
    localStorage.setItem("Musica de HipHop", Musica.HipHop);
    localStorage.setItem("Musica de Reggaeton", Musica.Reggaeton);

}

function Musica2(){

    var Musica = {
        Rock:"Rayando el sol",
        Pop: "Dance Monkey",
        HipHop: "Lose Yourself",
        Reggaeton: "Gasolina",
    }

    var Inf15 = document.getElementById("M1");
    var Inf16 = document.getElementById("M2");
    var Inf17 = document.getElementById("M3");
    var Inf18 = document.getElementById("M4");

    Inf15.innerText = "Musica Rock: " + Musica.Rock;
    Inf16.innerText = "Musica Pop: " + Musica.Pop;
    Inf17.innerText = "Musica de HipHop: " + Musica.HipHop;
    Inf18.innerText = "Musica de Reggaeton: " + Musica.Reggaeton;
}




    
    

