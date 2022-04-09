const { Console } = require('console');
const readline = require('readline');
const { CLIENT_RENEG_LIMIT } = require('tls');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);


{
	console.log("mathsymbol", mathSymbol);
	console.log("num1:", num1);
	console.log("num2:", num2);

	if(mathSymbol === "+"){
		console.log(num1 + num2);
	}
	else if(mathSymbol === "-"){
	console.log(num1 - num2);
	}
	else if(mathSymbol === "*"){
		console.log(num1 * num2);
	}
	else if (mathSymbol === "/"){
		console.log(num1 / num2);
	}
	else if (mathSymbol === "^") {
		console.log(Math.pow(num1, num2));
	}
	else if (mathSymbol === "sqrt"){
		if (num2 =NaN) {
			console.log(Math.sqrt(Math.pow(num1, num2)));
		} else {
			console.log(Math.sqrt(num1));
		}
	}

	


}
	// This line closes the connection to the command line interface.
	reader.close()

	});
