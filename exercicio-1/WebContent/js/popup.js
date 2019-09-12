function lernome() {
	let nome = prompt("Digite seu nome", "");
	let p = document.getElementById("p_nome");
	p.innerHTML = "Olá " + nome;
	let gostou = confirm ("Olá " + nome + ", Você gostou da minha pagina?")
	if (gostou) {
		alert("Obrigado");
	} else {
		alert ("Foda-se");
	}
}

function exibirData() {
	let data = new Date();
	//alert(data);
	//document.write(data);
	let p = document.getElementById("p_data");
	p.innerHTML = "A data de Hoje é " + data;
	
	
}