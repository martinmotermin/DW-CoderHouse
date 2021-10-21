'use strict';

let cartItems = JSON.parse(localStorage.getItem('cart'));
const cartTextContent = document.getElementById('cart-text-container');
const cartItemsContainer = document.getElementById('cart-container');

const createCartCard = function (item) {
  const card = document.createElement('div');
  card.classList.add('cart-card');
  card.setAttribute('id', item.id);
  const cardImg = document.createElement('img');
  cardImg.classList.add('card-img');
  cardImg.setAttribute('src', item.src);
  const cardTextContainer = document.createElement('div');
  cardTextContainer.classList.add('text-container');
  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('cart-name');
  cardTitle.textContent = item.name;
  const cardDescr = document.createElement('p');
  cardDescr.classList.add('card-descr');
  cardDescr.textContent = item.description;
  const cardPrice = document.createElement('p');
  cardPrice.classList.add('card-price');
  cardPrice.textContent = `$${item.price} c/u`;
  const quantContainer = document.createElement('div');
  quantContainer.classList.add('quant-container');
  const quant = document.createElement('p');
  quant.classList.add('quantity');
  quant.textContent = item.quantity;
  quant.setAttribute('id', `q${item.id}`);
  const plusBtn = document.createElement('button');
  const lessBtn = document.createElement('button');
  plusBtn.textContent = '+';
  lessBtn.textContent = '-';
  plusBtn.classList.add('btn', 'btn--plus');
  lessBtn.classList.add('btn', 'btn--less');

  cardTextContainer.appendChild(cardTitle);
  cardTextContainer.appendChild(cardDescr);
  quantContainer.appendChild(lessBtn);
  quantContainer.appendChild(quant);
  quantContainer.appendChild(plusBtn);
  card.appendChild(cardImg);
  card.appendChild(cardTextContainer);
  card.appendChild(cardPrice);
  card.appendChild(quantContainer);
  cartItemsContainer.appendChild(card);
};

const quantBtn = function (e) {
  const targetBtn = e.target;
  const productID = e.target.parentElement.parentElement.id;
  const product = cartItems[productID - 1];

  if (targetBtn.classList.contains('btn--plus')) {
    product.quantity++;
    document.getElementById(`q${productID}`).textContent = product.quantity;
  } else if (targetBtn.classList.contains('btn--less')) {
    if (product.quantity > 0) {
      product.quantity--;
      document.getElementById(`q${productID}`).textContent = product.quantity;
    }
  }
};

if (cartItems !== []) {
  cartTextContent.style.display = 'none';
  cartItems.forEach((element) => {
    createCartCard(element);
  });
} else {
  cartTextContent.style.display = 'block';
}

cartItemsContainer.addEventListener('click', quantBtn);
