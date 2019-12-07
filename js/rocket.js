let timer = null;
let countdownNumber = 10;

let changeState = function (state) {
	document.body.className = 'body-state' + state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;

	if (state == 2){
		timer = setInterval(function () {

			countdownNumber--;
			document.getElementById('countdown').innerHTML = countdownNumber;
			if(countdownNumber > 4 && countdownNumber <= 7){
				document.getElementById('nervous').className = 'nervous show';
			}else{
				document.getElementById('nervous').className = 'nervous';

			}

			if(countdownNumber > 1 && countdownNumber <= 4){
				document.getElementById('cant-wait').className = 'cant-wait show';
			}else{
				document.getElementById('cant-wait').className = 'cant-wait';
			}

			if(countdownNumber <= 0){
				changeState(3);
			}
		}, 500);
	}else if (state == 3){
		let success = setTimeout(function () {
			let randomNumber = Math.round(Math.random() * 10);
			console.log(randomNumber);
			if(randomNumber > 3){
				//success
				changeState(4);
			}else{
				//fail
				changeState(5);
			}
		}, 2000)
	} 
}