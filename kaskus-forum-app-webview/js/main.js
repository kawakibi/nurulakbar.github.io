$( document ).ready(function() {
    $( ".btn-icon.quote" ).click(function() {
		$(this).toggleClass( "selected" );
		$(this).closest('.post-item').toggleClass("quoted");
	});

  	var viewport_width = $(window).width()-30;
    $(".breadcrumb ul").css("width", viewport_width);

    $( window ).resize(function() {
		var viewport_width = $(window).width()-30;
	    $(".breadcrumb ul").css("width", viewport_width);
	});


});