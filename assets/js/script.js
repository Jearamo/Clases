$(document).ready(function(){

    let numero1 = 0;
    let numero2 = 0;

    let resultado = 0;

    const soloNumeros = /^\d+$/;

    $("#btnSumar").click(function(){
        /*NUMERO 1 */
        numero1 = $("#numero1").val();

        if(numero1 === ""){
            $("#error1").text("Debe ingresar un numero");
            $("#error1").css("color","red");
            return;
        }
        
        if(!soloNumeros.test(numero1)){
            $("#error1").text("solo numeros");
            $("#error1").css("color","red");
            return;
        }
        /*NUMERO 2 */
        numero2 = $("#numero2").val();

        if(numero2 === ""){
            $("#error2").text("Debe ingresar el segundo numero");
            $("#error2").css("color","red");
            return;
        }
        
        if(!soloNumeros.test(numero2)){
            Swal.fire({
                title: "Error",
                text: "Solo acepta numeros",
                icon: "warning"
              });
            return;
        }
        /*RESULTADO */
        resultado = parseInt(numero1) + parseInt(numero2); // Parsea a enteros y suma

        $("#resultado").text("El resultado de la suma es: " + resultado);
        $("#resultado").css("color", "green");


    })

});