
var nombre =  prompt("Nombre","ingresa tu nombre");
var apellido =  prompt("Apellido","ingresa tus Apellidos");
var nota1 =parseInt(prompt("Nota1","ingresa la primera nota "));
var nota2 =parseInt(prompt("Nota1","ingresa la primera nota "));
var resultado;
if((nota1+nota2)/2 >13)
	{
		resultado="Aprobado";
	}
	else
	{
		resultado="Desaprobado";
	}

document.getElementById("nombre").innerHTML=nombre;
document.getElementById("apellido").innerHTML=apellido;
document.getElementById("nota1").innerHTML=nota1;
document.getElementById("nota2").innerHTML=nota2;
document.getElementById("resultado").innerHTML=resultado;
