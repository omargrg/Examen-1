function mostrarFoto4(){
    document.getElementById("foto").style.display = "block";
}
    

function ocultarFoto4(){
    document.getElementById("foto").style.display = "none";
}

var flagN = false;
var flagNumeros = false;
var mensaje = new Array();

function validarTelefono4(){

    var telefono = document.getElementById("telefono").value;

    var n = telefono.length;
    if (n != 10){
        flagN = true;
        mensaje.push("El teléfono debe tener exactamente 10 números")
    }

    var numero = 0;
    for (var i=0; i<n; i++){
        if ((telefono.charCodeAt(i) < 48) || (telefono.charCodeAt(i) > 57)) numero++;
    }
    if (numero > 0){
        flagNumeros = true;
        mensaje.push("El teléfono debe solo contener números del 0 al 9");
    }

     if(!flagN && !flagNumeros){

        document.getElementById("msg").innerHTML="";

        var li = document.createElement("li");
        li.innerHTML = "El teléfono ingresado es correcto.";
        document.getElementById("msg").appendChild(li);
    }else{

        imprimirErrores(mensaje);
    }
}

function imprimirErrores(mensaje){
  
    var listaErrores = document.getElementById("msg");
    listaErrores.innerHTML = "";
s
    mensaje.forEach(function(mensaje){
        var li = document.createElement("li");
        li.innerHTML = mensaje;
        listaErrores.appendChild(li);
    });
}