var timer = null;
var countdownNumber = 5;

var changeState = function (state) {
	document.body.className = 'body-state' + state;
	clearInterval(timer);
	countdownNumber = 5;
	document.getElementById('countdown').innerHTML = countdownNumber;

	if (state == 2){
		timer = setInterval(function () {
			countdownNumber--;
			document.getElementById('countdown').innerHTML = countdownNumber;
			if(countdownNumber <= 0){
				changeState(3);
			}
		}, 500);
	}else if (state == 3){
		var success = setTimeout(function () {
			var randomNumber = Math.round(Math.random() * 10);
			console.log(randomNumber);
			if(randomNumber > 5){
				changeState(4);
			}else{
				changeState(5);
			}
		}, 2000)
	} 
}