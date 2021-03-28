function sumar(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var suma = parseInt(numero1) + parseInt(numero2);
    miCampoTexto = document.getElementById("numero1","numero2").value;
    document.getElementById('resultado').innerHTML = suma;
    
}
    function resta(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var resta = parseInt(numero1) - parseInt(numero2);
    document.getElementById('resultado').innerHTML = resta;
}
    function multipicacion(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var multipicacion = parseInt(numero1) * parseInt(numero2);
    document.getElementById('resultado').innerHTML = multipicacion;
}
    function division(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var division = parseInt(numero1) / parseInt(numero2);
    document.getElementById('resultado').innerHTML = division;
}
    function potencia(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var potencia = parseInt(numero1) ** parseInt(numero2);
    document.getElementById('resultado').innerHTML = potencia;
}
    function Validacion(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
    return true;
}else{
    alert("'[ERROR] !El campo debe tener un valor numerico!");
    return false;
}
}
