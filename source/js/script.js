/* Author:

*/
$(document).ready(function(){
	$('.responsive').picture();
	$('.test').anystretch("img/concertBig.jpg");

	/*$('figure img').on('load', function() {
		$('[data-spy="scroll"]').each(function () {
    		var $spy = $(this).scrollspy('refresh')
    	});
	})*/
	var $container = $('#photos')
	$container.imagesLoaded( function(){
		$container.isotope({
		  // options
		  itemSelector : '.photo'
		})
	});

	var $container2 = $('#videos')
	$container2.imagesLoaded( function(){
		$container2.isotope({
		  // options
		  itemSelector : '.video'
		})
	});

	// fix sub nav on scroll
	var $win = $(window)
		,  $nav = $('#mainNav')
		,  navTop = $('#mainNav').length && $('#mainNav').offset().top
		,  isFixed = 0
		,  $img = $('figure img')

	processScroll()
	// hack sad times - holdover until rewrite for 2.1
	$nav.on('click', function () {
		if (!isFixed) setTimeout(function () { $win.scrollTop($win.scrollTop() - 47) }, 10)
	})

	$win.on('scroll', processScroll)
		.on('resize', resetScrollSpy)
		.on('load', resetScrollSpy)

	$img.on('load', resetScrollSpy)

	function processScroll() {
		var i, scrollTop = $win.scrollTop()
		if (scrollTop >= navTop && !isFixed) {
			isFixed = 1
			$nav.addClass('mainNav-fixed')
		} else if (scrollTop <= navTop && isFixed) {
			isFixed = 0
			$nav.removeClass('mainNav-fixed')
		}
	}

	function resetScrollSpy(){
		$('[data-spy="scroll"]').each(function () {
    		var $spy = $(this).scrollspy('refresh')
    	});
	}

	// ease scrollTo
	$('#mainNav a').click(function() {
		//var l = $(this).attr('href');
	    $($(this).attr('href')).scrollTo();
	});

	//$('#mainNav').scrollspy();
});

$.fn.scrollTo = function(){
	if (this.length > 0)
		$(($.browser.chrome || $.browser.safari) ? 'body' : 'html').animate({scrollTop: $(this).offset().top}, 1000);
};