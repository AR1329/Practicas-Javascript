function EventListener(){
    document.getElementById("multiplo").addEventListener("click", impnum());
}
function impnum(){
    var listado = document.getElementById("listado");
    listado.innerText = "";
    
    var i=50; 

    while( i>=5 ){
        var des = document.createElement("li");
        des.setAttribute("class","list-group-item");
        des.innerText = i;
        listado.appendChild(des);

        i-=3
    }
}