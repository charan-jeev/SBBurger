const cartItems = document.querySelector('.cart-items');
const cartTotal = document.getElementById('cart-total');
let totalPrice = 0;
cart.forEach(item => {
    totalPrice += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
});
cartTotal.textContent = totalPrice.toFixed(2);