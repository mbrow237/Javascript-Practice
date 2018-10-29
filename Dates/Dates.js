//A quick test to see how dates work in Javascript

var rightNow;
var earilerTime;
var timeDifference;


var buttonPressed = function(){
	var timeDisplayOne = document.getElementById('timeOne');
	var timeDisplayTwo = document.getElementById('timeTwo');
	if (!rightNow)
	{
		rightNow = new Date();
	
	timeDisplayOne.textContent = 'The time right now is ' + rightNow.toString();
	}
	else{
		earilerTime = rightNow.getTime();
		rightNow = new Date();
		timeDifference = ((rightNow.getTime()) - earilerTime);
		timeDisplayOne.textContent = 'The time right now is ' + rightNow.toString();
		timeDisplayTwo.textContent = 'It have been ' + timeConverted(timeDifference) + ' since the last time your pressed the button';
	}
	
	return false
}

function timeConverted(time){
	var milliseconds = time;
	var days = 0;
	var msInDay = 86400000;
	var hours = 0;
	var msInHours = 3600000;
	var minutes = 0;
	var msInMinutes = 60000;
	var seconds = 0;
	var msInSeconds = 1000;
	var timeString;
	
	days = Math.floor(milliseconds/msInDay);
	milliseconds = (milliseconds%msInDay);
	
	hours = Math.floor(milliseconds/msInHours);
	milliseconds = (milliseconds%msInHours);
	
	minutes = Math.floor(milliseconds/msInMinutes);
	milliseconds = (milliseconds%msInMinutes);
	
	seconds = Math.floor(milliseconds/msInSeconds);
	milliseconds = (milliseconds%msInSeconds);
	
	timeString = days+'d '+hours+'h '+minutes+'m '+seconds+'s '+milliseconds+ 'ms';
	
	return timeString;
}	




