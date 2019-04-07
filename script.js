let flag = false;
let ans = 0;
function insert(value){
  	var letters = '0123456789ABCDEF';
  	var color = '#';
  	for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  	}
	console.log(value);
	let length = document.getElementById("textArea").value.length;
	let value1 = document.getElementById("textArea").value;
	if(length == 0){
		if(value >= 0 && value <= 9 || value == "."){
			document.getElementById("textArea").value += value;
		}
		else{
			document.getElementById("textArea").value = "";
		}
	}
	else if(length != 0){
		if(value >= 0 && value <= 9 && flag == false){
			document.getElementById("textArea").value += value;
		}
		else if(flag == true && value <=9 && value >= 0){
			document.getElementById("textArea").value = value;
			flag = false;
		}
		else if(flag == true && ["+","-","*","/"].includes(value)){
			document.getElementById("textArea").value = "";
			flag = false;
		}
		else{
			document.getElementById("textArea").value += value;
		}
	}
	document.getElementById("textArea").style.backgroundColor = "black";
	document.getElementById("textArea").style.color = color;
};

function clearAll(){
	document.getElementById("textArea").value = "";
	flag = false;
};

function backSpace(){
	if(flag == false){
	let value = document.getElementById("textArea").value;
	let num = document.getElementById("textArea").value.length;
	document.getElementById("textArea").value = value.substring(0, num - 1);
	}
	else{
		document.getElementById("textArea").value = "";
		flag = false;
	}
};

function square(){
	let something = document.getElementById("textArea").value;
	if(document.getElementById("textArea").value.length == 0){
		window.alert("Error");
	}
	else{let answerSquare = eval(something * something);
	document.getElementById("textArea").value = answerSquare;
	ans = answerSquare;
	}
};

function compute(){
	let length = document.getElementById("textArea").value.length;
	let something = document.getElementById("textArea").value;
	let exponent = something.includes("^");
	let exponent1 = something.substring(0, something.indexOf("^"));
	let exponent2 = something.substring(something.indexOf("^")+1, length);
	console.log(exponent1);
	console.log(exponent2);
	if(document.getElementById("textArea").value.length == 0){
		window.alert("Error");
	}
	else if(exponent == true){
		let answer = Math.pow(exponent1, exponent2);
		document.getElementById("textArea").value = answer;
		ans = answer;
		flag = true;
	}
	else{
		let answer = eval(something);
		document.getElementById("textArea").value = answer;
		flag = true;
		ans=answer;
	}
};

function squareRoot(){
	let length = document.getElementById("textArea").value.length;
	if(length == 0){
		window.alert("Error");
	}
	else{
	let something = document.getElementById("textArea").value;
	let answer = Math.sqrt(something);
	document.getElementById("textArea").value = answer;
	ans = answer;
	}
};

function logBaseE(){
	let length = document.getElementById("textArea").value.length;
	if(length == 0){
		window.alert("Error");
	}
	else{
	let something = document.getElementById("textArea").value;
	let answer = Math.log(something);
	document.getElementById("textArea").value = answer;
	ans = answer;
	}
};

function negative(){
	if(document.getElementById("textArea").value.length == 0){
		document.getElementById("textArea").value = "";
	}
	else{
		let something = document.getElementById("textArea").value;
		let answer = -something;
		document.getElementById("textArea").value = answer;
	}
};

function logBase10(){
	let length = document.getElementById("textArea").value.length;
	if(length == 0){
		window.alert("Error");
	}
	else{
	let something = document.getElementById("textArea").value;
	let answer = Math.log10(something);
	document.getElementById("textArea").value = answer;
	ans=answer;
	}
};

function sin(){
	let length = document.getElementById("textArea").value.length;
	if(length == 0){
		document.getElementById("textArea").value = "";
	}
	else{
	let something = document.getElementById("textArea").value;
	let answer = Math.sin(something);
	document.getElementById("textArea").value = answer;
	ans = answer;
	}
};

function cos(){
	let length = document.getElementById("textArea").value.length;
	if(length == 0){
		document.getElementById("textArea").value = "";
	}
	else{
	let something = document.getElementById("textArea").value;
	let answer = Math.cos(something);
	document.getElementById("textArea").value = answer;
	ans = answer;
	}
};

function tan(){
	let length = document.getElementById("textArea").value.length;
	if(length == 0){
		document.getElementById("textArea").value = "";
	}
	else{
	let something = document.getElementById("textArea").value;
	let answer = Math.tan(something);
	document.getElementById("textArea").value = answer;
	ans = answer;
	}
};

function ansPrevious(){
	let something = document.getElementById("textArea").value;
	let length = document.getElementById("textArea").value.length;
	if(something == ans){
		document.getElementById("textArea").value = ans;
	}
	else if(ans == 0){
		//DO NOTHING 
	}
	else{
		document.getElementById("textArea").value += ans;
	}
}


