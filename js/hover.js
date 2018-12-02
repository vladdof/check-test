window.addEventListener("DOMContentLoaded", function() {
	function hoverHint() {
		let wrapBlock = document.querySelector('.main'),
		    answerBlock = document.querySelectorAll('.answer'),
			hintBlock = wrapBlock.querySelector('.hint'),
			emptyBlock = wrapBlock.querySelector('.empty'),
			count = 0;

		if (isTouchDevice() === true) {	

		    wrapBlock.addEventListener('mouseenter', function(event) {
		        
		        let target = event.target;
		    	event.preventDefault();
		        
		    	if (target.className == 'answer') {
		    	    showHint();
		    	} else {;
		    	    hideHint();
		    	}
		    }, false);

		} else {

			for ( let i = 0; i < answerBlock.length; i++ ) {
				answerBlock[i].addEventListener('mouseover', function () {
					showPic();
				});

				answerBlock[i].addEventListener('mouseout', function (){
					hidePic();
				});
			}
		    
		}

		function isTouchDevice() {
		    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
		}

		function showPic() {
			hintBlock.style.display = 'flex';
			emptyBlock.style.display = 'none';
		}

		function hidePic() {
			hintBlock.style.display = 'none';
			emptyBlock.style.display = 'block';
		}

		// window.onresize = function() {
		// 	let	width = window.innerWidth;

		// 	if (width <= 992) {
				
		// 	} 
		// 	if (width > 992) {
		// 	}
		// }
	}

	hoverHint();
});
	

