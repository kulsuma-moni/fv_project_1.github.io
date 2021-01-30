


// Search Bar
function openSearch() {
	document.getElementById("myOverlay").style.display = "block";
  } 
  function closeSearch() {
	document.getElementById("myOverlay").style.display = "none";
  }; 
// POPUP FROM JS
  var x = document.getElementById("login");
  var y = document.getElementById("register");
  var z = document.getElementById("btn");  
  
  function register(){
	  x.style.left="-400px";
	  y.style.left="50px";
	  z.style.left="110px";
  }
  function login(){
	  x.style.left="50px";
	  y.style.left="450px";
	  z.style.left="0px";
  }
	 // RESPONSIVE MAIN MENU JS
	 jQuery(document).ready(function () {
		jQuery('.menu').meanmenu();
		});
	
	//   END RESPONSIVE MAIN MENU JS
	// COURSES AREA JS
	function openCourse(evt, subName) {
		// Declare all variables
		var i, tabcontent, tablinks;
	  
		// Get all elements with class="tabcontent" and hide them
		tabcontent = document.getElementsByClassName("tab_ctn");
		for (i = 0; i < tabcontent.length; i++) {
		  tabcontent[i].style.display = "none";
		}
	  
		// Get all elements with class="tablinks" and remove the class "active"
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
		  tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
	  
		// Show the current tab, and add an "active" class to the link that opened the tab
		document.getElementById(subName).style.display = "block";
		evt.currentTarget.className += " active";
	  } 
		// Get the element with id="defaultOpen" and click on it
		document.getElementById("defaultOpen").click();

		(function($){
			"use strict";
		
			  // data-background
			$("[data-background]").each(function(){
				$(this).css("background-image", "url("+ $(this).attr("data-background") + ")")
			});
		
			  // Sticky Menu
			  $(window).on('scroll', function() {
				if ($(this).scrollTop() > 100){
				$('.main_menu').addClass('menu-shrink animated slideInDown');
				} else {
				$('.main_menu').removeClass('menu-shrink animated slideInUp');
				}
			});
		
		// Smoth scroll
		$('.menu li a').on('click', function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 50}, 1000);
			e.preventDefault();
			});
		  
			//   TO-TOP
			$('.to-top').toTop({
				//options with default values
				autohide: true,  //boolean 'true' or 'false'
				offset: 420,     //numeric value (as pixels) for scrolling length from top to hide automatically
				speed: 400,      //numeric value (as mili-seconds) for duration
				position:true,   //boolean 'true' or 'false'. Set this 'false' if you want to add custom position with your own css
				left: 15,       //numeric value (as pixels) for position from right. It will work only if the 'position' is set 'true'
				bottom: 30       //numeric value (as pixels) for position from bottom. It will work only if the 'position' is set 'true'
			});
			// Tooltips
			$('[data-toggle="tooltip"]').tooltip(); 
			
				// WOW Js Active
				new WOW().init();
		
		})(jQuery);
		