'use strict';
(function () {

$(".catalog-item__btn-details").on('click', function() {
  
  $.fancybox.open({
    src  : '#popup-catalog-item',
    type : 'inline',
    opts : {
		onComplete : function() {
      }
    }
  });

// getInfo
var catalog = document.querySelector('.catalog');

var modelChar_Time = document.querySelector('.popup-catalog-item-chars__text--time');
var modelChar_Radius = document.querySelector('.popup-catalog-item-chars__text--radius');
var modelChar_Weight = document.querySelector('.popup-catalog-item-chars__text--weight');
var modelChar_Speed = document.querySelector('.popup-catalog-item-chars__text--speed');



var modelChar_Name = Array.from(document.querySelectorAll('.popup-catalog-item__title'));
var modelChar_Name_form = document.querySelector('#model-name');

var modelPriceDel = document.querySelector('.popup-catalog-item-price-list__price-del');
var modelPrice = document.querySelector('.popup-catalog-item-price-list__price');
var modelPrice_form = document.querySelector('#model-price');



// console.log(modelPrice);
catalog.addEventListener('click', getInfo);

function getInfo(e) {

	if(e.target.classList.contains('catalog-item__btn-details')) {

		modelChar_Time.innerHTML = e.target.closest('.catalog-item').querySelector('.catalog-item-chars__text--time').innerHTML;
		modelChar_Radius.innerHTML = e.target.closest('.catalog-item').querySelector('.catalog-item-chars__text--radius').innerHTML;
		modelChar_Weight.innerHTML = e.target.closest('.catalog-item').querySelector('.catalog-item-chars__text--weight').innerHTML;
		modelChar_Speed.innerHTML = e.target.closest('.catalog-item').querySelector('.catalog-item-chars__text--speed').innerHTML;
		
		/* for php form */
		// if (e.target.closest('.catalog-item').contains('.catalog-item-price-list__price-del')) {
			// modelPriceDel.innerHTML = e.target.closest('.catalog-item').querySelector('.catalog-item-price-list__price-del').innerHTML;
		// }

		modelPrice.innerHTML = e.target.closest('.catalog-item').querySelector('.catalog-item-price-list__price').innerHTML;
		modelPrice_form.value = e.target.closest('.catalog-item').querySelector('.catalog-item-price-list__price').innerHTML;

		modelChar_Name_form.value = e.target.closest('.catalog-item').querySelector('.catalog-item__title').innerHTML;
		modelChar_Name.forEach( function (el){
			el.innerHTML = e.target.closest('.catalog-item').querySelector('.catalog-item__title').innerHTML;
		});
	}
};



  /* fancy */
	$('.popup-catalog-item-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.popup-catalog-item-slider__nav',
		dots: false,
	});

	$('.popup-catalog-item-slider__nav').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.popup-catalog-item-slider',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
	});


}); /* клик на подробнее, инициализация popup'a */



// $('#popup-catalog-item').fancybox({



	// thumbs : {
	// 	autoStart : true
	// }
	// image: {
	// 	preload: true
	// },

// 	'padding': 30,
// 	'overlayOpacity': 0.87,
//     // 'overlayColor': '#fff',
//     // 'transitionIn': 'none',
//     // 'transitionOut': 'none',
//     // 'titlePosition': 'inside',
//     // 'centerOnScroll': true,

	// helpers: {
	// 	overlay: {
	// 		locked: false
	// 	}
	// }





})(); // the end