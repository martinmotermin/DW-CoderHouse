'use strict';

const storeList = JSON.parse(localStorage.getItem('Store'));
const storeContainer = document.getElementById('productsContainer');
const filterContainer = document.querySelector('.filter-container');
const URLJSON = '../data/promo-codes.json';

// Adds a product to cart
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

// Filter by selection the list of products
const filterBtn = function (e) {
  e.preventDefault();

  if (e.target.classList.contains('dropdown-item')) {
    const cartFiltred = storeList.filter(
      (product) => product.category == e.target.textContent
    );
    storeContainer.innerHTML = '';
    cartFiltred.forEach((product) =>
      createCard(product, storeContainer, 'store-card')
    );
    if (e.target.textContent == 'Todo') {
      storeContainer.innerHTML = '';
      storeList.forEach((product) =>
        createCard(product, storeContainer, 'store-card')
      );
    }
  }
};

// Buy event
storeContainer.addEventListener('click', buy);

// AJAX call to render a "promo-code"
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

// Filter Event
filterContainer.addEventListener('click', filterBtn);
