function EventListener(){
    document.getElementById("multiplo").addEventListener("click", impnum());
    document.getElementById("multiplo2").addEventListener("click", impnum2());

}
function impnum(){
    var listado = document.getElementById("listado");
    listado.innerText = "";
    
    for(var i=50; i>=5; i-=3){
        var des = document.createElement("li");
        des.setAttribute("class","list-group-item");
        des.innerText = i;
        listado.appendChild(des);

    }
}
function impnum2(){
    var listado2 = document.getElementById("listado2");
    listado2.innerText = "";
    for(var x=50; x>=5; x--){
        if(x % 3 == 0){ 
        var comparar  = document.createElement("li");

        comparar.setAttribute("class","list-group-item");

        comparar.innerText = x;

        listado2.appendChild(comparar);
    }
}
}