'use strict';
(function () {

	// var btn = Array.from(document.querySelectorAll('.btn'));
	var btn = Array.from(document.querySelectorAll('.btn, .catalog-item__btn-details, .catalog-item__btn, .catalog-item, .popup-catalog-item__btn'));
	var container = document.querySelector('.container');

	var descWidth = 767;


	btn.forEach( function(el){
		if(container.offsetWidth > descWidth){
			el.classList.add('__hover');
		}
	});

	if(container.offsetWidth < descWidth){
		btn.forEach( function(el){
			el.classList.remove('__hover');
		});
	}


})(); // the end