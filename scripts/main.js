// Get elements from DOM
var displayedTime = document.querySelector("h1");
var displayedDate = document.querySelector("span");
var displayedGreeting = document.querySelector("p");


//Calls the function every 1000 milliseconds or 1 second
setInterval(showTime, 1000);

//A function that gets the time
function showTime() {
	//Gets the current date
	var currentDate = new Date();

	//Getting specific parts of the current date
	var year = currentDate.getFullYear(); //Current year

	var month = currentDate.toLocaleString("default", { month: "long" }); //Current month in sting form

	var dayOfWeek = currentDate.toLocaleString("default", { weekday: "long" }); //Current day of the week

	var hours = currentDate.getHours(); //Current hour

	var minutes = currentDate.getMinutes(); //Current minute

	//Text
	var am_pm = "PM"; //Differentiates morning from day and night
	var greeting = ""; //A greeting to myself

	//Changes the default 24hr standard time to 12hr

	// Setting times for different greetings
	if (hours >= 12 && hours < 17) {
		greeting = "<span>⛅</span> Good Afternoon Ebuka!";
	}
	if (hours >= 17 && hours < 22) {
		greeting = "<span>☁</span> Good Evening Ebuka!";
	}
	if (hours >= 22 && hours <= 23) {
		greeting = "<span>🌜</span> Good Night Ebuka!";
	}
	if (hours === 12) {
		am_pm = "pm";
	}
	if (hours >= 0 && hours < 12) {
		greeting = "<span>🌞</span> Good Morning Ebuka!";
		am_pm = "am";
	}

	//from 13:00 to 23:00
	if (hours > 12) {
		hours -= 12; //If the time is 13:00 => 13 - 12 = 1:00
		am_pm = "pm";
	}
	//When the time is 00:00
	if (hours === 0) {
		hours = 12;
	}

	//Makes the number a double digit by adding 0
	hours = hours < 10 ? `0${hours}` : hours;
	minutes = minutes < 10 ? `0${minutes}` : minutes;

	//Current time and date
	var currentTime = `${hours}:${minutes} ${am_pm}`;
	var todaysDate = `${dayOfWeek}, ${month} ${day()} ${year}`;

	//Adding the time, date and greeting to the DOM
	displayedTime.innerHTML = currentTime;
	displayedDate.innerHTML = todaysDate;
	displayedGreeting.innerHTML = `${greeting}`;
}

//A function that writes the day fo the month in full e,g 1st, 2nd, 3rd and so on
function day() {
	var date = new Date();
	var dayOfMonth = date.getDate();
	var str = dayOfMonth.toString();

	if (dayOfMonth === 1 || str[1] === "1") {
		return dayOfMonth + "st";
	} else if (dayOfMonth === 2 || str[1] === "2") {
		return dayOfMonth + "nd";
	} else if (dayOfMonth === 3 || str[1] === "3") {
		return dayOfMonth + "rd";
	} else {
		return dayOfMonth + "th";
	}
}
