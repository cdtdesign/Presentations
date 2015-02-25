window.onload = function() {
	var theCanvas1 = document.getElementById('Canvas1');
	if (theCanvas1 && theCanvas1.getContext) {
	var ctx1 = theCanvas1.getContext("2d");
	if (ctx1) {

		var srcVid1 = document.getElementById("vid1");
		srcVid1.play();

		setInterval(function(){
			
			ctx1.drawImage(srcVid1, 0,0, 320, 180);
			
			}, 50);


		}
	}
}