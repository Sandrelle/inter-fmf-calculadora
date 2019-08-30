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
	var num1 = parseFloat(document.getElementById("num1").value)
	var num2 = parseFloat(document.getElementById("num2").value)
	alert(num1/num2)
}

function multiplicacao(){
	var num1 = parseFloat(document.getElementById("num1").value)
	var num2 = parseFloat(document.getElementById("num2").value)
	alert(num1*num2)
}