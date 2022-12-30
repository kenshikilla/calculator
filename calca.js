function factorial(n){
	let answer = 1;
	for (let i = 1; i <= n; i++) {
			answer *= i;
	}
	return answer;
}
function calculator() {
	let a = prompt("Введите первое число")
	var c = a
	a = Number(a)
	if (isNaN(a) === true){
			alert("Вы ввели не число. Начинаю с начала.")
			calculator()
	}else{
			let b = prompt("Введите второе число")
			var d = b
			b = Number(b)
			if (isNaN(b) === true){
					alert("Вы ввели не число. Начинаю с начала.")
					calculator()
			}else{
					let pmmd = prompt("Введите операцию, которую хотите с ними провести(+, -, *, /)")
					if (pmmd == "+"){
							alert("Сумма равна " + (a + b))
					}else if(pmmd == "-"){
							alert("Разность равна " + (a - b))
					}else if(pmmd == "*"){
							alert("Произведение равно " + (a * b))
					}else if(pmmd == "/"){
							alert("Частное равно " + (a / b))
					}else{
							alert("Вы не правильно ввели операцию. Начинаю с начала")
							calculator()
					}
			}
	}
	if (c > d) {
			alert("Число " + c + " больше числа " + d + ". " + "Факториал числа " + c + " равен " + factorial(c))
	}else if (c < d) {
			alert("Число1 " + d + " больше числа " + c + ". " + "Факториал числа " + d +  " равен " + factorial(d))
	}else {
			alert("Числа равны. Их факториал равен " + factorial(c))
	}
}
calculator()
