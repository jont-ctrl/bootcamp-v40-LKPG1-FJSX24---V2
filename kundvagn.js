document.addEventListener('DOMContentLoaded', loadCart);

function loadCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  // Hämta kundvagnen från localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Tomma kundvagnens innehåll först
  cartItemsContainer.innerHTML = '';

  let totalPrice = 0;

  // Lägg till varje produkt i kundvagnen
  cart.forEach((item) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('cart-item');
    productDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.price} kr</p>
        `;

    cartItemsContainer.appendChild(productDiv);

    // Beräkna totalpriset
    totalPrice += parseFloat(item.price);
  });

  totalPriceElement.textContent = `${totalPrice} kr`;
}
