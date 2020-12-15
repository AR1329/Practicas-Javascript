function GuardarInformación(){

    var NomUsuario = String(document.getElementById("usuario").value);
    var Email = String(document.getElementById("email").value);
    var Password1 = String(document.getElementById("password").value);
    var Password2 = String(document.getElementById("password2").value);

    //Comparando cada uno de los inputs que no se ingrese un campo vacio 
    if(NomUsuario != "" && Email != "" && Password1 != "" && Password2 != ""){
        //Guardando la informacion en el localStorage
        localStorage.setItem("NomUsuario", NomUsuario);
        localStorage.setItem("Email", Email);

        if(Password1 == Password2){
            localStorage.setItem("Password1", Password1);
            localStorage.setItem("Password2", Password2);
        }else{
            alert("Las contraseñas no coinciden");
        } 
        }else{
        alert("Revisa la información, que no esta correcta");
        }
    alert("La información se guardo correctamente");
}
function ObtenerInformación(){

    var imprimirNombre = document.getElementById("NomUsuario");
    var imprimirEmail = document.getElementById("Email");
    var imprimirpass = document.getElementById("Password");

    localStorage.getItem("NomUsuario");
    localStorage.getItem("Email");
    localStorage.getItem("Password1");

    imprimirNombre.innerText = "El nombre del ususario es:" + " " +  localStorage.getItem("NomUsuario");
    imprimirEmail.innerText = "El correo del usuario es:" + " " + localStorage.getItem("Email");
    imprimirpass.innerText = "La contraseña del usuario es:" + " " +  localStorage.getItem("Password1");
}