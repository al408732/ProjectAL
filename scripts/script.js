/*
Student Name: Aaron Lopez
File Name: script.js
Date: 11/05/2023
*/

// hamburger menu function
function hamburger() {
	var menu = document.getElementById("menu-links");
	var logo = document.getElementById("back-to-basics-logo");
	if (menu.style.display === "block" && logo.style.display === "none") {
		menu.style.display = "none";
		logo.style.display = "block";
	} else {
		menu.style.display = "block";
		logo.style.display = "none";
	}
}
