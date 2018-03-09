'use strict';

var lSArray = [];
lSArray = JSON.parse(localStorage.getItem('shoppingCart'));
console.log(lSArray);

var imageProducts = [];

var shoppingCartTable = document.getElementById('table-chart');


function Product(filepath, name, quantityInCart) {
  this.filepath = filepath;
  this.name = name;
  this.quantityInCart = quantityInCart;
  imageProducts.push(this);
}

Product.prototype.render = function () {
  if (this.quantityInCart > 0) {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.innerHTML = '<img src="' + this.filepath + '" alt="' + this.name + '" width=100px>';
  trEl.appendChild(tdEl);
  tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  tdEl = document.createElement('td');
  tdEl.textContent = this.quantityInCart;
  trEl.appendChild(tdEl);
  shoppingCartTable.appendChild(trEl);
  }
};

function makeNewProducts() {
  for(var i in lSArray){
    new Product(lSArray[i].filepath, lSArray[i].name, lSArray[i].quantityInCart);
  }

  renderTable();
}

function renderTable() {
  for(var i in imageProducts){
    imageProducts[i].render();
  }
}

makeNewProducts();
