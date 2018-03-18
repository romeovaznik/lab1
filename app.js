var rand = getRandom();
var input;
var stdin = process.openStdin();

console.log("I think about 4 digit number");
console.log("What number is it?");

stdin.addListener("data", function(d) {
	if(d.toString().trim() == "answer"){
		console.log(rand);
		return;
	}
	input = parseInt(d.toString().trim(), 10)
	if(input == rand)
	{
		console.log("Correct!!!")
		stdin.removeAllListeners('data');
	}
	else{
		if(isNaN(input)){
			console.log("It must be a number!");
		}
		if(input < 1000 || input > 9999){
			console.log("It must be a 4 digit number!");
		}
		else{
			var value = input.toString();
			var enigm = rand.toString();
			var bulls = 0;
			var cows = 0;
			
			for(var i = 0; i < 4; i++){
				if(value[i] == enigm[i]){
					bulls++;
				}
				for(var j = 0; j < 4; j++){
					if(i != j && value[i] == enigm[j]){
						cows++;
					}
				}
			}
		console.log("\n Bulls: " + bulls + " Cows: " + cows);
		}
	}
 });

function getRandom(){
	  var random = Math.random() * (10000 - 1000) + 1000;
	  return random | 0;
}
