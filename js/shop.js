'use strict';

const storeList = JSON.parse(localStorage.getItem('Store'));
const storeContainer = document.getElementById('productsContainer');
const URLJSON = '../data/promo-codes.json';

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
  renderMiniCart(JSON.parse(localStorage.getItem('cart')));
};

storeContainer.addEventListener('click', buy);

$('.btnPromo').click(() => {
  $('.promoCode-container').html('');
  $.getJSON(URLJSON, (res, rej) => {
    let dataArray = res;
    for (const data of dataArray) {
      $('.promoCode-container').prepend(
        `<h3 class="promo-code">${data.promocode}</h3>`
      );
    }
  });
});
