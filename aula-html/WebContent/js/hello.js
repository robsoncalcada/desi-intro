//alert("Olá, Mundo!");
//confirm ("Tudo bem?");
//prompt("Qual o seu nome?", "Robson");

function pergunta (){
let resposta = confirm("Tudo bem?");
if (resposta == true) {
		alert("Voce esta bem");
			open('http://www.google.com.br');
	} else {
		alert("Foda-se");
	}
}