var result;
var user_data;
var second = 0;
var user = document.getElementById('user');
function start3second(){
	var secondCount = setInterval(secondFun,1000);
	function secondFun(){
		second += 1;
		document.getElementById('countdown').innerHTML = second;
		if (second%3 == 0) {
			second = 0;
			clearInterval(secondCount);
		}
	}
	setTimeout(start,3000);
}

function choice(data){
	user_data = data;
	result = user.innerHTML = "<img src='img/"+ data +".jpg' class='img-fluid'>";
}

function start(){
	var ai_user_ramdom = Math.floor(Math.random() * 3) + 1;
	var ai_user = document.getElementById('ai_user').innerHTML = "<img src='img/"+ ai_user_ramdom +".jpg' class='img-fluid'>";
	var alert = document.getElementById('alert');


	if (user_data == 4) {
		if (ai_user_ramdom == 3) {
			alert.innerHTML = "Win";
			alert.className = "alert-success";
		}else if(ai_user_ramdom == 2){

			alert.innerHTML = "Lose";
			alert.className = "alert-danger";
		}else if(ai_user_ramdom == 1){
			alert.innerHTML = "Equal";
			alert.className = "alert-primary";
		}
	}

	if (user_data == 5) {
		if (ai_user_ramdom == 1) {
			alert.innerHTML = "Win";
			alert.className = "alert-success";
		}else if(ai_user_ramdom == 3){
			alert.innerHTML = "Lose";
			alert.className = "alert-danger";
		}else if(ai_user_ramdom == 2){
			alert.innerHTML = "Equal";
			alert.className = "alert-primary";
		}
	}

	if (user_data == 6) {
		if (ai_user_ramdom == 2) {
			alert.innerHTML = "Win";
			alert.className = "alert-success";
		}else if(ai_user_ramdom == 1){
			alert.innerHTML = "Lose";
			alert.className = "alert-danger";
		}else if(ai_user_ramdom == 3){
			alert.innerHTML = "Equal";
			alert.className = "alert-primary";
		}
	}

	
}