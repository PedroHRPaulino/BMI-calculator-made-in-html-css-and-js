var peso;
var altura;
var imc;
var resultado;

function calcular(){

    peso = document.getElementById('peso').value;
	altura = document.getElementById('altura').value;
	imc = peso/(altura*altura);
	
	if(imc < 50){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = 'Seu resultado foi '+imc.toFixed(2) + '<h3><br>Cuidado voce esta muito abaixo do peso</br</h3>';
		document.getElementById('peso').value = '';
		document.getElementById('altura').value = '';
		return false;
	}

	if(imc < 100){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = 'Seu resultado foi '+ imc.toFixed(2) + '<h3><br>Cuidado voce esta muito acima do peso</br</h3>';
		document.getElementById('peso').value = '';
		document.getElementById('altura').value ='';
		return false;
	}

	if(altura == '' && peso == ''){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = 'Sem valores para a operação';
		return false;
	}
}
	


	

	