window.addEventListener("DOMContentLoaded", function() {
	function hoverHint() {
		let wrapBlock = document.querySelector('.main'),
			answerBlock = document.querySelectorAll('.answer'),
			hintBlock = wrapBlock.querySelector('.hint'),
			emptyBlock = wrapBlock.querySelector('.empty'),
			count = 0;

		for ( let i = 0; i < answerBlock.length; i++ ) {
			answerBlock[i].addEventListener('mouseover', function () {
				showHint();
			});

			answerBlock[i].addEventListener('mouseout', function (){
				hideHint();
			});
		}

		function showHint() {
			hintBlock.style.display = 'flex';
			emptyBlock.style.display = 'none';
		}

		function hideHint() {
			hintBlock.style.display = 'none';
			emptyBlock.style.display = 'block';
		}
	}

	hoverHint();
});
