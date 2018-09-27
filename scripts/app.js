/*var titulo = document.getElementsByTagName('h1');
console.log(titulo);*/


//function cambiar_mensaje(){
//	var texto_rojo = document.getElementsByClassName('rojo');
//	console.log(texto_rojo[1].textContent);
//	texto_rojo[1].textContent="Grupo 175"; 
//}



/*var fecha = document.getElementById('fecha');
console.log(fecha);*/

function calcular_iva(){
	var precio = parseInt(document.getElementById("precio").value);
	var resultado = precio*0.19;
	var spamresultado = document.getElementById("resultado");

	spamresultado.textContent=resultado;
}