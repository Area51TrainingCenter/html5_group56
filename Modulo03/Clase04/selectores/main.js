/*
document.getElementById() 	Returns the element that has the ID attribute with the specified value
document.getElementsByClassName() 	Returns a NodeList containing all elements with the specified class name
document.getElementsByName() 	Returns a NodeList containing all elements with a specified name para los inputs
document.getElementsByTagName() 	Returns a NodeList containing all elements with the specified tag name
*/

/*var caja1= document.getElementById("data1");*/

/*document.getElementsByClassName() 
document.getElementsByName() 
document.getElementsByTagName()*/


/*var d = document.getElementById("div1");*/
var titulo=document.getElementsByTagName("h1");
titulo.style.color = "blue";
	for (var i = 0;i < titulo.length; i++) {
	titulo[i].style.color = "blue";	
	};



function mostrarOp1(){
var caja1= document.getElementById("data1");
caja1.className = "mostrar";	
}

function mostrarOp2(){
var caja1= document.getElementById("data2");
caja1.className = "mostrar";	
}


function mostrarOp3(){
var caja1= document.getElementById("data3");
caja1.className = "mostrar";	
}

function limpiar(){
	cajas =document.getElementsByClassName("mostrar");
	
	document.getElementById("data1").className="ocultar";
	document.getElementById("data2").className="ocultar";
	document.getElementById("data3").className="ocultar";
	
	
}

function vergaleria(){

	galeria=document.getElementsByClassName("item-galeria");

	for (var i = 0;i < galeria.length; i++) {
	galeria[i].className= galeria[i].className + " ver";	
	};
	
}