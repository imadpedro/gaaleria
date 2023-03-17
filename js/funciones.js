const formulario = document.querySelector("form");
const inputTexto = document.querySelector('input[type=text]');
const contenedorColores = document.querySelector("ul");
const mensajeError = document.querySelector(".error");

function color(r,g,b){
	let li = document.createElement("li");
	li.innerHTML = [r,g,b].join(",");
	li.style.backgroundColor = `rgb(${[r,g,b].join(",")})`;
	return li;
}

formulario.addEventListener("submit", evento => {
	evento.preventDefault();
	mensajeError.classList.remove("visible");
	let textoError = "el campo no puede estar vacío";

	if(inputTexto.value.trim() != ""){
		let valido = inputTexto.value.trim().split(",").length == 3;

		if(valido){
			let valores = inputTexto.value.trim().split(",").map( x => Number(x));
			valores.forEach(n => {
				valido = valido && n - parseInt(n) == 0 && n >= 0 && n <= 255;
			});

			if(valido){
				contenedorColores.appendChild(color(valores[0],valores[1],valores[2]));
				return inputTexto.value = "";
			}
		}
		textoError = "debe escribir tres valores";
	}
	mensajeError.innerHTML = textoError;
	mensajeError.classList.add("visible");
	
});


