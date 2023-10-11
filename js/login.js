// Bienvenida.
let nombre= prompt("¿Cómo te llamas?", " ")
alert("Bienvenid@" + nombre); // Muestra nombre ingresado.

// Usuario para probar tienda
console.log("Usuario: tienda Password:1234")

// Formulario para hacer Login.

function login() {
    let user, pass;
    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;


    if (user == "tienda" && pass == "1234") {

        window.location = "./html/pag2.html";
    }

    else {
        alert("Por favor, ingrese nombre de usuario y contraseña correctos.");
    }


}