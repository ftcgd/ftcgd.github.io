/*This is the JavaScript file for Parallax Test Page */
$(document).ready(main);

function main() {

  $(".imageHolder").hide();
  $(".imageHolder").fadeIn(2000);
  
  $(".sectorHeader").css("left", "0");

  // // Hides the things to be hidden
  // $(".welcome").hide();
  // $(".paragraph").hide();
  // $(".begin").hide();
  // $(".welcome").fadeToggle(2000);
  // $(".paragraph").fadeToggle(7000);
  // $(".begin").fadeToggle(7000);


	// //Parallax Effect
	// $(window).scroll(function() {
	//
	// 	var wScroll = $(this).scrollTop();
	//
	// 	$(".title img").css({
	// 		"transform" : "translate(0, "+ wScroll/2 +"px)"
	// 	});
	//
	// 	$(".fore img").css({
	// 		"transform" : "translate(0, "+ wScroll/4 +"px)"
	// 	});
	//
	// 	console.log(wScroll);
	//
	//
	// });


}
