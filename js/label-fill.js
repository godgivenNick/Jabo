'use strict';
(function () {


var inputField = Array.from(document.querySelectorAll('.input-field'));

inputField.forEach(function(elem) {
  elem.children[0].addEventListener('change', checkValue);
  elem.children[0].addEventListener('blur', checkValue);
})


function checkValue(e) {
  if(e.target.value) {
    e.target.parentNode.classList.add('label--filled');
  } else {
    e.target.parentNode.classList.remove('label--filled');
  }
}


})(); // the end