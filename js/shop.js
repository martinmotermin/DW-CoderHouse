'use strict';

const storeList = JSON.parse(localStorage.getItem('Store'));
const storeContainer = document.getElementById('productsContainer');

const buy = function (e) {
  const productID = e.target.parentElement.id;

  let cart;

  if (localStorage.getItem('cart') == null) {
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem('cart'));
  }

  cart.push(storeList[productID - 1]);
  localStorage.setItem('cart', JSON.stringify(cart));
};

storeContainer.addEventListener('click', buy);
