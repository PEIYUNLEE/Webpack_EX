let $ = require('jquery');
import bird from '../images/bird.jpg';
import squirrel from '../images/squirrel.jpg'

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
