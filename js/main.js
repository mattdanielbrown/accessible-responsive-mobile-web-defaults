;(function () {
	'use strict'
	document.documentElement.classList.remove('no-js')
	document.documentElement.classList.add('js')
	document.addEventListener("touchstart", function () {}, true);
	
	window.addEventListener('load', function () {
		document.body.classList.add('is-loaded')
	})
}())
