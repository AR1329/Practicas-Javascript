function Objetos(){

    var coche1 = {
    puertas:2,
    ruedas:4,
    luces:4,
    espejos:2,
    color:"azul",
    };

    var coche2 = {
        puertas:4,
        ruedas:4,
        luces:4,
        espejos:2,
        color:"rojo"
    };

    var coche3 = {
        puertas:2,
        ruedas:4,
        luces:4,
        espejos:4,
        color:"negro"
    };

    var coche4 = {
        puertas:4,
        ruedas:4,
        luces:4,
        espejos:2,
        color:"griss"
    };

    var fabricantes = {
        marca1:"Ford",
        modelo1:"Ford focus",
        anio1:2010,
        marca2:"Seat",
        modelo2:"Seat Ibiza",
        anio2:2020,
        marca3:"BMW",
        modelo3:"BMW serie 3",
        anio3:2015,
        marca4:"Peugeot",
        modelo4:"Peugeot 206",
        anio4:2018
    };

    var Ford = {
        puertas: coche1.puertas,
        ruedas: coche1.ruedas,
        luces: coche1.luces,
        espejos: coche1.espejos,
        color: coche1.color,
        marca: fabricantes.marca1,
        modelo: fabricantes.modelo1,
        anio: fabricantes.anio1
    };

    //Imprimir el objeto completo
    console.log(Ford);
    //Imprimir el resultado de una propiedad
    console.log(Ford.puertas);
    console.log(Ford.espejos);

    var Seat = {
        puertas: coche2.puertas,
        ruedas: coche2.ruedas,
        luces: coche2.luces,
        espejo: coche2.espejos,
        color: coche2.color,
        marca: fabricantes.marca2,
        modelo: fabricantes.modelo2,
        anio: fabricantes.anio2,
    };

    console.log(Seat);


    var BMW = {
        puertas: coche3.puertas,
        ruedas: coche3.ruedas,
        luces: coche3.luces,
        espejo: coche3.espejos,
        color: coche3.color,
        marca: fabricantes.marca3,
        modelo: fabricantes.modelo3,
        anio: fabricantes.anio3,
    };

    console.log(BMW);

    var Peugeot = {
        puertas: coche4.puertas,
        ruedas: coche4.ruedas,
        luces: coche4.luces,
        espejo: coche4.espejos,
        color: coche4.color,
        marca: fabricantes.marca4,
        modelo: fabricantes.modelo4,
        anio: fabricantes.anio4,
    };

    console.log(Peugeot);
}