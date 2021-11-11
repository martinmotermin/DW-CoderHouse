'use strict';
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const miniCartContainer = document.querySelector('#minicart-list tbody');
const cartIndicator = document.querySelector('.cart-indicator');
const emptyMiniCartBtn = document.getElementById('remove-all');
const deleteBtns = document.getElementsByClassName('delete-product');

// Removes one product from the cart
const removeProductMiniCart = function (e) {
  const productId = Number(e.target.id);

  if (e.target.classList.contains('delete-product')) {
    cart = cart.filter((product) => product.id !== productId);
    console.log(cart);
    miniCartContainer.innerHTML = '';
    localStorage.setItem('cart', JSON.stringify(cart));
    renderMiniCart(cart);
  }
};

// Renders all cart products on the mini cart
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
              <a href="#" class="delete-product" id="${product.id}"> X </a>
          </td>
          `;
      miniCartContainer.appendChild(row);
    });
  } else {
    miniCartContainer.innerHTML = '';
  }

  cartIndicator.textContent = arr.length;
}

// Event that removes all products from the cart
emptyMiniCartBtn.addEventListener('click', () => {
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  renderMiniCart(cart);
});

if (cart.length > 0) {
  renderMiniCart(cart);
}

// Event that removes one product from the cart
miniCartContainer.addEventListener('click', removeProductMiniCart);
