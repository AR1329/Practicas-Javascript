function EventListener(){
    document.getElementById("calcular").addEventListener("click", Click());
}
function Click(){
    var Nnumero = prompt("¿Cuántos números vas a ingresar");
    var positivo = document.getElementById("positivo");


    var promediopositivo = document.getElementById("promediopositivo");

    var promedioTodos = document.getElementById("promedioTodos");
    var contador=0, sumapositivo=0, contadornegativo=0, sumanegativa=0, promedioTotal=0,  promedio=0, promedio2=0;

    for (var i=0; i<Nnumero; i++){
         var num = Number(prompt("ingresa un nùmero"));
         if(num > 0){
            contador++;
            sumapositivo= num + sumapositivo;
         promedio= sumapositivo / contador;
         }
         else{
            contadornegativo++

            sumanegativa=  num + sumanegativa;
            promedio2= sumanegativa / contadornegativo;
        }
      promedioTotal = (promedio + promedio2) / Nnumero;
   }
   positivo.innerText = "Numeros mayores a 0:" + " " + contador;
   promediopositivo.innerText = "Promedio de los numeros positivos:" + " " + promedio;
   promedioTodos.innerText = "Promedio de todos los numeros:" + " " + promedioTotal;
} 