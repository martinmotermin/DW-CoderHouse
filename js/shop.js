'use strict';

const storeList = JSON.parse(localStorage.getItem('Store'));
const storeContainer = document.getElementById('productsContainer');

const buy = function (e) {
  const productID = e.target.parentElement.id;
  const product = storeList[productID - 1];
  product.quantity = 1;

  let cart;

  if (localStorage.getItem('cart') == null) {
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem('cart'));
  }

  const exist = cart.some((item) => item.id === product.id);

  if (exist) {
    const newCart = cart.map((item) => {
      if (item.id === product.id) {
        item.quantity++;
        return item;
      } else {
        return item;
      }
    });

    cart = [...newCart];
  } else {
    cart = [...cart, product];
  }

  localStorage.setItem('cart', JSON.stringify(cart));
};

storeContainer.addEventListener('click', buy);
