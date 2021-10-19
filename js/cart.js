'use strict';

const cartItems = JSON.parse(localStorage.getItem('cart'));

const cartItemsContainer = document.getElementById('cart-container');

cartItems.forEach((item) => {
  const card = document.createElement('div');
  card.classList.add('cart-card');
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
  cardPrice.textContent = `$${item.price}`;

  cardTextContainer.appendChild(cardTitle);
  cardTextContainer.appendChild(cardDescr);
  card.appendChild(cardImg);
  card.appendChild(cardTextContainer);
  card.appendChild(cardPrice);

  cartItemsContainer.appendChild(card);
});
