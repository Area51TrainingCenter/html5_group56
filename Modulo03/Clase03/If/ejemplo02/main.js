var saludo;
var horaActual = new Date().getHours();
console.log(horaActual);
if (horaActual < 18) {
    saludo = "Buenos dias";
}
else{
    saludo = "Buenas noches";

}
//console.log(saludo);
document.getElementById("saludo").innerHTML = saludo;