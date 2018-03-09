'use strict';

var imageProducts = [];
var productOrderForm = document.getElementById('product-form');
productOrderForm.addEventListener('submit', updateCart);

//constructor function
function ImageConstruct(name, filepath, quantityInCart) {
  this.name = name;
  this.filepath = filepath;
  this.quantityInCart = quantityInCart;
  imageProducts.push(this);
}

//creating instances
function checkLocal () {
  if (localStorage.getItem('imageProducts')) {
    imageProducts = JSON.parse(localStorage.getItem('imageProducts'));

  } else {
    new ImageConstruct('bag', 'img/bag.jpg');
    new ImageConstruct('banana', 'img/banana.jpg');
    new ImageConstruct('bathroom', 'img/bathroom.jpg');
    new ImageConstruct('boots', 'img/boots.jpg');
    new ImageConstruct('breakfast', 'img/breakfast.jpg');
    new ImageConstruct('bubblegum', 'img/bubblegum.jpg');
    new ImageConstruct('chair', 'img/chair.jpg');
    new ImageConstruct('cthulhu', 'img/cthulhu.jpg');
    new ImageConstruct('dog-duck', 'img/dog-duck.jpg');
    new ImageConstruct('dragon', 'img/dragon.jpg');
    new ImageConstruct('pen', 'img/pen.jpg');
    new ImageConstruct('pet-sweep', 'img/pet-sweep.jpg');
    new ImageConstruct('scissors', 'img/scissors.jpg');
    new ImageConstruct('shark', 'img/shark.jpg');
    new ImageConstruct('sweep', 'img/sweep.png');
    new ImageConstruct('tauntaun', 'img/tauntaun.jpg');
    new ImageConstruct('unicorn', 'img/unicorn.jpg');
    new ImageConstruct('usb', 'img/usb.gif');
    new ImageConstruct('water-can', 'img/water-can.jpg');
}
}


function createDropdown() {
  console.log('test');
  var selectEl = document.getElementById('product-dropdown');
  for(var i in imageProducts){
    var optionEl = document.createElement('option');
    optionEl.textContent = imageProducts[i].name;
    optionEl.value = imageProducts[i].name;
    selectEl.appendChild(optionEl);
  }
}

function updateCart(event) {
  event.preventDefault();
  var selectedProduct = event.target.productToPurchase.value;
  var selectedQuantity = event.target.quantityInCart.value;
  for(var i in imageProducts){
    if(selectedProduct === imageProducts[i].name){
      imageProducts[i].quantityInCart = selectedQuantity;
    }
  }
  localStorage.setItem('shoppingCart', JSON.stringify(imageProducts));
}

checkLocal();
createDropdown();
productOrderForm.addEventListener('submit', updateCart);
