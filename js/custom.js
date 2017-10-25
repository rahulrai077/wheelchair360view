
var currentImage = 1;
var currentImageFolder = 'E24A0C';

function changeCurrentImageValue(a){
	currentImage = a
	console.log(currentImage);
}

$(document).ready(function(){
	
	$("#wheelchair").vc3dEye({
		imagePath: "images/"+currentImageFolder+'/',
		totalImages:51,
		imageExtension:"png",
		currentImage: currentImage,
		onchange: function(a){
			changeCurrentImageValue(a);
		}
	});



	// My code starts here
	$(document).on("click", "#color-category li a", function() {
		var color_code = $(this).attr("data-color");
		currentImageFolder = color_code;
		$("#wheelchair").html('');
		$("#wheelchair").vc3dEye({
			imagePath: "images/"+currentImageFolder+'/',
			totalImages:51,
			imageExtension:"png",
			currentImage: currentImage,
			onchange: function(a){
				changeCurrentImageValue(a);
			}
		});
	});


	

});
