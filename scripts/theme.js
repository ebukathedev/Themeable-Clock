//Get elements from the DOM
var stylesheet = document.querySelector("link");// The css stylesheet 
var themeToggle = document.querySelector("#theme-toggle"); // Shows the theme section
var themeSection = document.querySelector(".theme-section"); // Shows all the themes
var themeButtons = document.querySelectorAll(".theme-btn"); // An array containing the individual theme buttons

//This gets the value of the last theme that was applied
var currentTheme = localStorage.getItem("theme");

//This ensures that when the page reloads the same theme is still applied
window.onload = function () {
	if (!currentTheme) {
		stylesheet.setAttribute("href", "css/themes/default.css");
	} else {
		stylesheet.setAttribute("href", "css/themes/" + currentTheme + ".css");
	}
};

//Display all the themes when the button is clicked
themeToggle.addEventListener("click", function () {
	themeSection.classList.toggle("hide");
});

//This function adds an event listener to each of the buttons
function customTheme() {
	for (i = 0; i < themeButtons.length; i++) {
		themeButtons[i].addEventListener("click", enableTheme); //When a button is clicked run the code in the enableTheme function
	}
}
customTheme(); //Call the function and run the code inside it

//This function applies a theme when a button is clicked
function enableTheme() {
	//The id of the pressed links the HTML to is stylesheet
	stylesheet.setAttribute("href", "css/themes/" + this.id + ".css");

	//The theme applied is updated in the local storage
	localStorage.setItem("theme", this.id);

	//Hide the theme options after a theme has been selected
	themeToggle.click();
}

console.log(currentTheme);
