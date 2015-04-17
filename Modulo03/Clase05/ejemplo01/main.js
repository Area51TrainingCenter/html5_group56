$(document).ready(function(){

	$('#agregar').click(function(){
		//$('.list-contacto').append("<article class='item-agenda'><img src='220x220.jpg'><p class='nombre'>Nombre : <span>Nombre</span></p><p class='apellido'>Apellido : <span>Apellido</span></p><p class='telefono'>Telefono : <span>Telefono</span></p><p class='correo'>Correo : <span>Correo</span></p></article>")
		agregar();		
	})


})

function agregar(){
$('.list-contacto').append("<article class='item-agenda'><img src='220x220.jpg'><p class='nombre'>Nombre : <span>"+$("#inpNombre").val()+"</span></p><p class='apellido'>Apellido : <span>"+$("#inpApellido").val()+"</span></p><p class='telefono'>Telefono : <span>"+$("#inpTelefono").val()+"</span></p><p class='correo'>Correo : <span>"+$("#inpCorreo").val()+"</span></p></article>")
}