const cart = JSON.parse(localStorage.getItem('cart')) || [];
document.getElementById("count").innerText = cart.length;

displayCart();

function displayCart() {
    let totalPrice = 0;
    const cartTable = document.getElementById('cart-items');

    if (cart.length) {
        cartTable.innerHTML = cart.map((item, i) => `
            <tr>
                <td>${i + 1}</td>
                <td>${item.name}</td>
                <td><img src="${item.image}" alt="${item.name}" width="50"></td>
                <td><input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${item.id}, this.value)"></td>
                <td>${item.price.toLocaleString()}₫</td>
                <td>${(item.price * item.quantity).toLocaleString()}₫</td>
                <td><button onclick="removeFromCart(${item.id})"><i class='bx bxs-trash'></i></button></td>
            </tr>`).join('');
    } else {
        cartTable.innerHTML = `<tr><td colspan="7" style="text-align:center;">🛒 Giỏ hàng trống!</td></tr>`;
    }

    totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('checkout-total-price').innerText = `${totalPrice.toLocaleString()}₫`;
}

function updateQuantity(id, quantity) {
    const idx = cart.findIndex(item => item.id === id);
    if (idx >= 0) {
        let newQuantity = Math.max(1, parseInt(quantity, 10) || 1);
        cart[idx].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }
}

function removeFromCart(id) {
    const idx = cart.findIndex(item => item.id === id);
    if (idx >= 0) {
        cart.splice(idx, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        document.getElementById("count").innerText = cart.length;
        displayCart();
    }
}

function express() {
    if (!cart.length) {
        alert("Giỏ hàng rỗng. Tiếp tục mua hàng!");
        window.location.href = 'productsMale.html';
    } else {
        localStorage.setItem('checkoutCart', JSON.stringify(cart));  
        window.location.href = 'checkout.html';  
    }
}

