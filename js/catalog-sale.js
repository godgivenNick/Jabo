'use strict';
(function () {

///////////////////////////////////////


// var	catalogItemsDiscount20 = [

// 	'#jabo-2al' ,
// 	// 'jabo-2ad' ,
// 	// 'jabo-2bl-eco' ,
// 	// 'jabo-2cg-gps-eco' ,
// 	// 'jabo-2ag-gps-auto' ,
// 	'#jabo-5a-10a-gps-eco' ,
// 	'#jabo-2d-gps-eco-container' ,
// 	'jabo-5cg-gps-eco'
// ];


// var catalogItem = Array.from(document.querySelectorAll('.catalog-item'));


///////////////////////////////////////


var	catalogItemsDiscount20 = [
	'jabo-2al' ,
	'jabo-2ag-gps-auto'
];

var catalogItem = Array.from(document.querySelectorAll('#jabo-2al, #jabo-2ag-gps-auto'));

catalogItem.forEach( function(el){
	
	el.classList.add('__sale-20-percent');

	///////////////////////////////////////
	
	// if(catalogItemsDiscount20.indexOf(el.id)) {
		// this(el).classList.add('__sale-20-percent');
	// }

	///////////////////////////////////////
});
















})(); // the end