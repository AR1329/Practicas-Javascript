function EventListener(){
    document.getElementById("num").addEventListener("click",calcular());
}
function calcular(){
    var numero = Number(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");

    if(numero>0){
        numero= numero*1;

    }else {
        numero= numero*-1;

    }

    resultado.innerText = "El valor absoluto es:" + " " + numero;        

}