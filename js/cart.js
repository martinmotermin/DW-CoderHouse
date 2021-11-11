'use strict';

let cartItems = JSON.parse(localStorage.getItem('cart'));
const cartTextContent = document.getElementById('cart-text-container');
const cartItemsContainer = document.getElementById('cart-container');
const cartTotalContainer = document.querySelector('.cart-total');
const totalPriceContainer = document.querySelector('.total-price');
const totalItemsContainer = document.querySelector('.total-items');

// Create all card buttons for each product
const createProductBtns = function (item, container) {
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
  const remove = document.createElement('button');
  remove.classList.add('btn', 'remove');
  remove.textContent = 'X';

  quantContainer.appendChild(lessBtn);
  quantContainer.appendChild(quant);
  quantContainer.appendChild(plusBtn);
  container.appendChild(remove);
  container.appendChild(quantContainer);
};

// Create card for a product
const createCard = function (item, container, className) {
  const card = document.createElement('div');
  card.classList.add('card', className);
  card.setAttribute('id', item.id);
  const cardImg = document.createElement('img');
  cardImg.classList.add('card-img-top');
  cardImg.setAttribute('src', item.src);
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const cardTitle = document.createElement('h5');
  cardTitle.textContent = item.name;
  cardTitle.classList.add('card-title');
  const cardText = document.createElement('p');
  cardText.textContent = item.description;
  cardText.classList.add('card-text');
  const cardPrice = document.createElement('p');
  cardPrice.textContent = `$${item.price * item.quantity}`;
  cardPrice.classList.add('card-price');
  cardPrice.setAttribute('id', `p-${item.id}`);

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardPrice);
  card.appendChild(cardImg);
  card.appendChild(cardBody);
  container.appendChild(card);

  if (card.classList.contains('cart-card')) {
    createProductBtns(item, card);
  }
};

// Delete all HTML elements from any container
const cleanHTML = function (container) {
  container.innerHTML = '';
};

// Create remove button for each cart product
const removeBtn = function (e) {
  const targetBtn = e.target;
  const productID = Number(e.target.parentElement.id);

  if (targetBtn.classList.contains('remove')) {
    cartItems = cartItems.filter((item) => item.id !== productID);

    cleanHTML(cartItemsContainer);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    cartItems.forEach((element) => {
      createCard(element, cartItemsContainer, 'cart-card');
    });

    calcTotalItems(cartItems);
    calcTotalPrice(cartItems);
  }
};

// Adds functionality to the addition and subtraction buttons
const quantBtn = function (e) {
  const targetBtn = e.target;
  const productID = Number(e.target.parentElement.parentElement.id);

  if (targetBtn.classList.contains('btn--plus')) {
    cartItems.forEach((item) => {
      if (item.id === productID && item.quantity < item.stock) {
        item.quantity++;
        document.getElementById(`q${productID}`).textContent = item.quantity;
        document.getElementById(`p-${productID}`).textContent = `$${
          item.quantity * item.price
        }`;
      }
    });
    localStorage.setItem('cart', JSON.stringify(cartItems));
    calcTotalItems(cartItems);
    calcTotalPrice(cartItems);
  } else if (targetBtn.classList.contains('btn--less')) {
    cartItems.forEach((item) => {
      if (item.id === productID && item.quantity > 0) {
        item.quantity--;
        document.getElementById(`q${productID}`).textContent = item.quantity;
        document.getElementById(`p-${productID}`).textContent = `$${
          item.quantity * item.price
        }`;
      }
    });
    calcTotalItems(cartItems);
    calcTotalPrice(cartItems);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }
};

// Calc and render total cart items
const calcTotalItems = function (arr) {
  let totalItems = 0;
  arr.forEach((el) => {
    totalItems += el.quantity;
  });
  totalItemsContainer.textContent = `Productos: ${totalItems}`;
  return totalItems;
};

// Calc and render total cart value
const calcTotalPrice = function (arr) {
  let totalPrice = 0;
  const newArr = arr.map((el) => {
    return el.price * el.quantity;
  });
  totalPrice = newArr.reduce((a, b) => a + b, 0);
  totalPriceContainer.textContent = `Total: $${totalPrice}`;
  return totalPrice;
};

// Render cart elements
if (cartItems !== []) {
  cartTextContent.style.display = 'none';
  cartItems.forEach((element) => {
    createCard(element, cartItemsContainer, 'cart-card');
  });
  const payBtn = document.createElement('button');
  payBtn.classList.add('btn', 'pay-btn');
  payBtn.textContent = 'PAGAR';
  cartTotalContainer.appendChild(payBtn);
  calcTotalPrice(cartItems);
  calcTotalItems(cartItems);
} else {
  cartTextContent.style.display = 'block';
}

//JQuery events
$('#cart-container').click(quantBtn);
$('#cart-container').click(removeBtn);
