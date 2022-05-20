
calculatorNavigation()
 function calculatorNavigation(){
 	 $(".navigateCalculator").on("click","a", function () {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	      top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 200);
	  });
 }
         
         
 