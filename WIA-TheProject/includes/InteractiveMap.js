// JavaScript Document
// Christina D. Thorpe

$('document').ready(function(){
// Begin Ready

	//...................................................
	// When the form changes
	$('#mapForm').change(function(){	
		
		var selectedCity = $('#mapForm option:selected').val();
		if(selectedCity=='ALL'){	
			$('a.dot').show(1000);
		} else {
			$('a.dot[city *= "'+selectedCity+'"]').show(1000);
			$('a.dot[city != "'+selectedCity+'"]').hide(1000);
		}
	});
	
	//...................................................
	// When a dot is clicked
	$('a.dot').click(function(){
		/*alert($(this).attr('city'));*/
		/* Turns the dots green as they are clicked on. */
		$('a.dot').removeClass('selected');
		$(this).addClass('selected');
		
		/* Populate map containter w/ HTML */
		var city = '.cityDetail#' + $(this).attr('destination');
		var htmlCode = $(city).html();
		
		/* Fade detail container and populate with clicked city info */
		$('.detailContainer').fadeOut(500, function(){
			$('.detailContainer .cityDetail').html(htmlCode);
			$('.detailContainer').fadeIn(500);
		});

	});
	
//End Ready
});