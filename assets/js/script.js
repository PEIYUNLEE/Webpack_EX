
let $ = require('jquery');
import bird from '../images/bird.jpg';
import squirrel from '../images/squirrel.jpg'
// // Import Fonts
// import "../fonts/PT-Sans.eot";
// import "../fonts/PT-Sans-Bold.eot";
// import "../fonts/PT-Sans-Italic.eot";
// import "../fonts/PT-Sans-BoldItalic.eot";
// import "../fonts/PT-Sans.woff";
// import "../fonts/PT-Sans-Bold.woff";
// import "../fonts/PT-Sans-Italic.woff";
// import "../fonts/PT-Sans-BoldItalic.woff";
// import "../fonts/PT-Sans.ttf";
// import "../fonts/PT-Sans-Bold.ttf";
// import "../fonts/PT-Sans-Italic.ttf";
// import "../fonts/PT-Sans-BoldItalic.ttf";
// import "../fonts/PT-Sans.svg";
// import "../fonts/PT-Sans-Bold.svg";
// import "../fonts/PT-Sans-Italic.svg";
// import "../fonts/PT-Sans-BoldItalic.svg";

import '../css/style.css';
import '../css/normalize.css';

$('#image_bird').attr("src", bird);
$('#image_squirrel').attr("src", squirrel);

$(document).ready(function () {
	// when a hanburger menu is clicked
	let $ul = $(".nav__list"),
		 $menu = $(".nav__menu");

	$($menu).click(function () {
		// toggle menu-click Class
		$ul.toggleClass("menu-click");
	}); // end click event handler
});
