function soma(){	
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var resultado = num1 + num2;
     alert(resultado);
}

function subtracao() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var resultado = num1 - num2;
     alert(resultado);
}

function divisao(){
	var num1 = document.getElementById("num1")
	var num2 = document.getElementById("num2")
	alert("O resultado é "+num1/num2)
}