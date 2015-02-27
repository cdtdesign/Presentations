window.onload = function() {

	
if(Modernizr.canvas){
	//Canvas is supported

	var theCanvas1 = document.getElementById('Canvas1');
	if (theCanvas1 && theCanvas1.getContext) {
	var ctx1 = theCanvas1.getContext("2d");
	if (ctx1) {

		var srcImg1 = document.getElementById("img1");
		
		//Draw img directly onto the canvas
		ctx1.drawImage(srcImg1, 0,0, 150,150);
		
			} else {
			//Canvas is NOT supported
			//Polyfills would go here:
			
			
			}
			
			console.log(Modernizr);

		}
		
	}
	
}

	var theCanvas2 = document.getElementById('Canvas2');
	if (theCanvas2 && theCanvas2.getContext) {
	var ctx2 = theCanvas2.getContext("2d");
	if (ctx2) {

		var srcImg2 = document.getElementById("img2");
		
		//Draw img directly onto the canvas
		ctx2.drawImage(srcImg2, 825,10, 750,1050);
		
			} else {
			//Canvas is NOT supported
			//Polyfills would go here:
			
			
			}
			
			console.log(Modernizr);

		}
		
	

//Dropdown Featured Destinations
$(function() {
	
	//$('.directionalQueue').hover(function () {
//		$('.directionalQueue').effect('shake', { times: 1 }, 'slow');
//
//	});
//	
		
	$('.logo').mouseenter(function(){
		$('.logo').effect( 'bounce', { times: 2, distance: 25 }, 'slow' );
		$('.logo').css('transform', 'rotate(-15deg)');
		
		});
		
	$('.logo').mouseleave(function(){
		$('.logo').css('transform', 'rotate(0deg)');
		
		});



	
	$('.destinationHeader').mouseenter(function(){
		$('.destinationHeader').css('color', '#f16624');
		$('#arrowToggle').css('transform', 'rotate(90deg)');
		
		});
		
	$('.destinationHeader').mouseleave(function(){
		$('.destinationHeader').css('color', '#3b2416');
		$('#arrowToggle').css('transform', 'rotate(0deg)');
		
		});
	
	$('.destinationHeader').click(function(){
		$('#featureDestination').slideToggle(500, function(){
			
			$('#featureDestination').css('height', '100%') && 
			$('#fdHide').css('display', 'inline');
			
			});
			
		
		}); // End Dropdown Featrued Destinations
		

/* ============================ Modal ============================ */

$('.modalClick1').on('click', function(event){
	event.preventDefault();
	$('.overlay')
		.fadeIn()
		.find('#modal1')
		.fadeIn();
});

$('.modalClick2').on('click', function(event){
	event.preventDefault();
	$('.overlay')
		.fadeIn()
		.find('#modal2')
		.fadeIn();
});


$('.close').on('click', function(event){
	event.preventDefault();
	$('.overlay')
	.fadeOut()
	.find('#modal1')
	.fadeOut();
});

$('.close').on('click', function(event){
	event.preventDefault();
	$('.overlay')
	.fadeOut()
	.find('#modal2')
	.fadeOut();
});


/* ============================ Login ============================ */

	$('#signinButton').click(function(){
		var user = $('#user').val();
		var pass = $('#pass').val();
		console.log("This notifies you if the password is working.");
		$.ajax({
			url: 'xhr/login.php',
			type: 'post',
			dataType: 'json',
			data: {
				username: user,
				password: pass
			},
			success: function(response){
				console.log("test user");

				if (response.error){
					alert(response.error);
					} else {
				window.location.assign('joinJourney.html');
			}
		}

	});

});
/* ============================ Logout ============================ */

$('#logOut').click(function(e){
		e.preventDefault();
		$.get('xhr/logout.php', function(){
			window.location.assign('joinJourney.html')
		})
	});

/* ============================ Register ============================ */

$('#register').on('click', function(){
 var firstname = $('#first').val(),
	  lastname = $('#last').val(),
	  username = $('#userName').val(),
	  email = $('#email').val(),
	  password = $('#password').val();
	  console.log(firstname+' '+lastname+' '+username+' '+email+' '+password);
 
	  $.ajax({
		  url:'xhr/register.php',
		  type: 'post',
		  dataType: 'json',
		  data: {
			  firstname: firstname,
			  lastname: lastname,
			  username: username,
			  email: email,
			  password: password
		  },
 
		  success: function(response){
			  if (response.error){
				  alert(response.error);
			  }else{
				  window.location.assign('destinations.html');
			  }
		  }
	  });

});

/* ============================ Display Username ============================ */

$.getJSON("xhr/check_login.php", function(data){
		console.log(data);
		$.each(data, function(key, val){
			console.log(val.first_name);
			$(".userid").html("Traveling " + val.first_name, function(){
				$('#logOut').css('display', 'inline');
				
				});
		})
	});
	
/*$.getJSON("xhr/check_login.php", function(data){
		console.log(data);
		$.each(data, function(key, val){
			console.log(val.first_name);
			$(".userid").html("Traveling " + val.first_name);
		})
	});*/

/* ============================ Tooltip ============================ */

$('.masterTooltip').hover(function(){
	var title = $(this).attr('title');
	$(this).data('tipText', title).removeAttr('title');
	$('<p class="tooltip"></p>')
	.text(title)
	.appendTo('body')
	.fadeIn('slow');
}, function()	{
	$(this).attr('title', $(this).data('tipText'));
	$('.tooltip').remove();
}).mousemove(function(e)	{
	var mousex = e.pageX + 20;
	var mousey = e.pageY + 10;
	$('.tooltip')
	.css({ top: mousey, left: mousex })
});



		
});