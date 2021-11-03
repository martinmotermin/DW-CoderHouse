'use strict';

let cartItems = JSON.parse(localStorage.getItem('cart'));
const miniCartContainer = document.querySelector('#minicart-list tbody');
const cartIndicator = document.querySelector('.cart-indicator');

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

if (cartItems.length > 0) {
  renderMiniCart(cartItems);
}
