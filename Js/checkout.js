document.addEventListener("DOMContentLoaded", function () {
    const checkoutCart = JSON.parse(localStorage.getItem('checkoutCart')) || [];
    const checkoutTable = document.getElementById('checkout-items');
    let totalPrice = 0;

    if (checkoutCart.length === 0) {
        Swal.fire({
            icon: "info",
            title: "Giỏ hàng trống!",
            text: "Bạn chưa có sản phẩm nào. Hãy tiếp tục mua sắm!",
            confirmButtonText: "Mua ngay",
            allowOutsideClick: false
        }).then(() => {
            window.location.href = 'productsMale.html';
        });
        return;
    }

    checkoutTable.innerHTML = checkoutCart.map((item, i) => `
        <tr>
            <td>${i + 1}</td>
            <td>${item.name}</td>
            <td><img src="${item.image}" alt="${item.name}" width="50"></td>
            <td>${item.quantity}</td>
            <td>${item.price.toLocaleString()}₫</td>
            <td>${(item.price * item.quantity).toLocaleString()}₫</td>
        </tr>
    `).join('');

    totalPrice = checkoutCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('checkout-total-price').innerText = `${totalPrice.toLocaleString()}₫`;
});

function completePayment() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();

    if (!name || !phone || !address) {
        Swal.fire({
            icon: "warning",
            title: "Thiếu thông tin!",
            text: "Vui lòng nhập đầy đủ thông tin giao hàng.",
            confirmButtonText: "OK"
        });
        return;
    }

    Swal.fire({
        icon: "success",
        title: "Thanh toán thành công!",
        html: `<b>📌 Tên:</b> ${name}<br>
               <b>📞 SĐT:</b> ${phone}<br>
               <b>🏠 Địa chỉ:</b> ${address}`,
        confirmButtonText: "Về trang chủ",
        allowOutsideClick: false
    }).then(() => {
        localStorage.removeItem('checkoutCart');
        localStorage.removeItem('cart');

        window.location.href = 'index.html';
    });
}
