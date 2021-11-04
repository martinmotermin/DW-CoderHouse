'use strict';

const storeList = JSON.parse(localStorage.getItem('Store'));
const storeContainer = document.getElementById('productsContainer');
const miniCartContainer = document.querySelector('#minicart-list tbody');
const cartIndicator = document.querySelector('.cart-indicator');
let cart;
const URLJSON = '../data/promo-codes.json';

if (localStorage.getItem('cart') == null) {
  cart = [];
} else {
  cart = JSON.parse(localStorage.getItem('cart'));
  renderMiniCart(cart);
}

function renderMiniCart(arr) {
  if (arr.length > 0) {
    arr.forEach((product) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>
            <img src="${product.src}" width="100">
        </td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${product.id}"> X </a>
        </td>
        `;
      miniCartContainer.appendChild(row);
    });
  }

  cartIndicator.textContent = arr.length;
}

const buy = function (e) {
  const productID = e.target.parentElement.id;
  const product = storeList[productID - 1];
  product.quantity = 1;

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

  miniCartContainer.innerHTML = '';
  renderMiniCart(cart);
};

storeContainer.addEventListener('click', buy);

$('.btnPromo').click(() => {
  $.getJSON(URLJSON, (res, rej) => {
    let dataArray = res;
    for (const data of dataArray) {
      $('.promoCode-container').prepend(
        `<h3 class="promo-code">${data.promocode}</h3>`
      );
    }
  });
});
