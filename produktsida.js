function sortProducts() {
    console.log("Sorteringsfunktion körs");
    const grid = document.getElementById('product-grid');
    const products = Array.from(grid.getElementsByClassName('product'));

    const sortBy = document.getElementById('sort').value;

    products.sort((a, b) => {
        if (sortBy === 'name') {
            // Sortera efter namn (A-Ö)
            return a.getAttribute('data-name').localeCompare(b.getAttribute('data-name'));
        } else if (sortBy === 'price') {
            // Sortera efter pris (Lågt till Högt)
            return parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price'));
        }
    });

    // Rensa och återmontera produkterna i rätt ordning
    grid.innerHTML = ''; // Rensa grid
    products.forEach(product => grid.appendChild(product)); // Återmontera produkterna
}
// Lägg till eventlistener för "Lägg till i kundvagn"-knapparna
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const product = event.target.closest('.product');
    const productName = product.getAttribute('data-name');
    const productPrice = product.getAttribute('data-price');

    // Skapa ett objekt för produkten
    const productObj = {
        name: productName,
        price: productPrice
    };

    // Hämta nuvarande kundvagn från localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Lägg till produkten i kundvagnen
    cart.push(productObj);

    // Uppdatera kundvagnen i localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} har lagts till i kundvagnen!`);
}