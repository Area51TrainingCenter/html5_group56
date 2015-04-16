function listarDias(){
	for (var i = 1; i <= 31; i++) {
/*
		if ( i < 10 ){
			document.write("<option value='" + i + "'>0" + i + "</option>");
		} else {
			document.write("<option value='" + i + "'>" + i + "</option>");
		}
*/
		var d = ( i < 10 ) ? "0" + i : i ;
		document.write("<option value='" + i + "'>" + d + "</option>");
		//				--------------	------ ---- ----- -----------
		//					Cadena		Variable	Cadena Variable Cadena
	}
	// i
	// 1
	// 2
	// 31
	// 32 - *_*
}
function listarMeses(){
	var contador;
	contador = 1;
	while( contador <= 12 ){
		document.write("<option value='" + contador + "'>" + contador + "</option>");
		contador++;
	}
}
function listarAnios(){
	var i;
	i = getAnio() - 80;
	while( i <= getAnio() -18 ){
		document.write("<option value='" + i + "'>" + i + "</option>");
		i++;
	}
/*
	getAnio()	-	i	- (getAnio() - 18)
	2014		- 1934	- 1996
	2014		- 1935	- 1996
	2014		- 1996	- 1996
	2014		- 1997	- 1996	_-_

*/
}
function getAnio(){
	var anio, fecha;
	fecha = new Date();
	anio = fecha.getFullYear();
	return anio;
}
function getMes(mes){
/*
	switch( mes ){
		case "M1":
			return "Enero";
		case "M2":
			return "Febrero";
//		...
		case 10:
			return "Noviembre";
		default:
			return "Diciembre";
	}
*/
	var meses;
	//meses = new Array("Enero","Febrero","Marzo","Abril");
	meses = Array();
	meses[0] = "Enero";
	meses[1] = "Febrero";
	meses[2] = "Marzo";
	meses[3] = "Abril";

	return meses[mes];
}

fecha = new Date();
anio = fecha.getFullYear();
console.log("Fecha: " + fecha);
console.log("Día de la semana " + fecha.getDay());
console.log("Día " + fecha.getDate());
console.log("Mes " + getMes(fecha.getMonth()));
console.log("Año " + fecha.getFullYear());
console.log("Hora " + fecha.getHours());
console.log("Minutos " + fecha.getMinutes());
console.log("Segundos " + fecha.getSeconds());

