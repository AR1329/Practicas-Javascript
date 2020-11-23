function EventListener(){
    document.getElementById("calcular").addEventListener("click", Click());
}
function Click(){
    var Sumapromedio = document.getElementById("Sumapromedio");

    var Sumanumerosimpar = document.getElementById("Sumanumerosimpar");
    var contador1 = 0, contador2 = 0,  sumapares= 0, promedio1= 0, sumaimpares= 0;
    var i=1;

    while ( i<=10 ){

        var num = Number(prompt("ingresa un nùmero"));
        if(num > 0 && num % 2 == 0){
            contador1++; 
            sumapares =num + sumapares;
            promedio1=sumapares / contador1;
        }
        else{
            contador2++; 
            sumaimpares= num + sumaimpares;
        }
        Sumapromedio.innerText = "El promedio es:" + " " + promedio1;
        Sumanumerosimpar.innerText = "Suma de los nùmeros impares son:" + " " + sumaimpares;

        i++
    }
}