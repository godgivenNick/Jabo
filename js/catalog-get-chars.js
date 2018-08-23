'use strict';
(function () {

var catalog = document.querySelector('.catalog');


var modelChar_Time = document.querySelector('.popup-catalog-item-chars__text--time');
var modelChar_Radius = document.querySelector('.popup-catalog-item-chars__text--radius');
var modelChar_Weight = document.querySelector('.popup-catalog-item-chars__text--weight');
var modelChar_Speed = document.querySelector('.popup-catalog-item-chars__text--speed');

var modelPrice = document.querySelector('.popup-catalog-item-price-list__price');
var modelPrice_form = document.querySelector('#catalog-item-price');

// console.log(modelPrice);
catalog.addEventListener('click', getInfo);

function getInfo(e) {

	if(e.target.classList.contains('catalog-item__btn-details')) {

		modelChar_Time.innerHTML = e.target.closest('.catalog-item').querySelector('.catalog-item-chars__text--time').innerHTML;
		modelChar_Radius.innerHTML = e.target.closest('.catalog-item').querySelector('.catalog-item-chars__text--radius').innerHTML;
		modelChar_Weight.innerHTML = e.target.closest('.catalog-item').querySelector('.catalog-item-chars__text--weight').innerHTML;
		modelChar_Speed.innerHTML = e.target.closest('.catalog-item').querySelector('.catalog-item-chars__text--speed').innerHTML;
		
		modelPrice.innerHTML = e.target.closest('.catalog-item').querySelector('.catalog-item-price-list__price').innerHTML;
		modelPrice_form.value = e.target.closest('.catalog-item').querySelector('.catalog-item-price-list__price').innerHTML;
	}
};









})(); // the end