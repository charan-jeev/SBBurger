const cart = [];
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        const item = event.target.parentElement;
        const name = item.getAttribute('data-name');
        const price = parseFloat(item.getAttribute('data-price'));
        cart.push({ name, price });
        updateCart();
    });
});

function updateCart() {
    const cartList = document.querySelector('.cart-items');
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });
    document.getElementById('total-price').textContent = total.toFixed(2);
}