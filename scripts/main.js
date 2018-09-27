//imprimir en consola
console.log("HOLA MUNDO");

//creación de variable numerica
var nuemro1 = 55;
var numero2 = 52;
console.log(nuemro1+numero2);

//variables de textos
var nombre = "Jeisson Sneyder"
var apellido = "Ramirez"
console.log(nombre);
console.log(apellido);

//varible boolean
var tiene_mascota=true;
tiene_mascota=false;

var frutas=['manzana', 'pera', 'banano', 'fresa', 25, true];
console.log(frutas[1]);

var persona ={nombre:"Jeisson", edad:"20", tiene_mascota:false, mascota:{raza:'Dalamta', nombre:'Killer'}};

console.log(persona['nombre']);
console.log(persona.edad);
console.log(persona.mascota.nombre);

var date = new Date();
console.log(Date);


console.log(!true);//negación
console.log(true && true);//and
console.log(false || true);//or


console.log(5%10);//

console.log(6>4);//mayor que
console.log(6>=6);//mayor o igual
console.log(3<7);//menor que
console.log(6==6);//igualdad
console.log(6!=6);//diferencia


//Estructura if y else
var edad =17;

if(edad>=18){
	console.log("Eres mayor de edad")
}else{
	console.log("Eres menor de edad")
}

//Estructura for
var dias=["Lunes","Martes","Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
for(var i=0; i<=6; i++ ){
	console.log(dias[i]);
}

//Funciones

/*function suma(n1,n2){
	var res=n1+n2;
	return res;
}


alert(suma(8,4));*/


function productoIva(valor_producto){
	var iva = 0.19;
	var resultado =valor_producto*iva; 

	return resultado;
}

alert(productoIva(40000));