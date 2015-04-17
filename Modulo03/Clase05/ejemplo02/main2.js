$(document).ready(function(){

$(".opciones li").click(function(){
	$(".opciones li").removeClass("active");
	$(this).addClass("active");
	$(this).attr("titulo");
	$(".descripcion").html("");
	$(".descripcion").append("<h1>Titulo de Pelicula 1</h1>");
	$(".descripcion").append("<strong>"+$(this).attr("data-titulo")+"</strong><br>");
	$( this ).css([
    "width", "height", "color", "background-color"
  ]);
})

})

