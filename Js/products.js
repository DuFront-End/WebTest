const productCatalog = [
    { id: 1, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Small Second Blue NK5010-51L", price: 6850000, image: "img/products/product-1.webp", image2: "img/products/product-1-1.webp"},
    { id: 2, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Blue Multiple NJ0151-53W ( NJ0151 )", price: 2490000, image: "img/products/product-2.webp", image2: "img/products/product-2-2.webp" },
    { id: 3, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Demi Rose Black NJ0154-80H ( NJ0154 )", price: 900000, image: "img/products/product-3.webp", image2: "img/products/product-3-3.webp" },
    { id: 4, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Rose Red NJ0153-82X ( NJ0153 )", price: 1040000, image: "img/products/product-4.webp", image2: "img/products/product-4-4.webp" },
    { id: 5, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Gold Green NJ0152-51X", price: 2890000, image: "img/products/product-5.webp", image2: "img/products/product-5-5.webp" },
    { id: 6, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Beige NJ0151-88W ( NJ0151 )", price: 2350000, image: "img/products/product-6.webp", image2: "img/products/product-6-6.webp" },
    { id: 7, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Blue Ice Multiple NJ0151-53L ( NJ0151 )", price: 1280000, image: "img/products/product-7.webp", image2: "img/products/product-7-7.webp" },
    { id: 8, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Black Multiple NJ0151-53E ( NJ0151 )", price: 950000, image: "img/products/product-8.webp", image2: "img/products/product-8-8.webp" },
    { id: 9, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Tiffany Ice Blue NJ0151-88M ( NJ0151 )", price: 950000, image: "img/products/product-9.webp", image2: "img/products/product-9-9.webp" },
    { id: 10, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Orange NJ0151-88Z ( NJ0151 )", price: 950000, image: "img/products/product-10.webp", image2: "img/products/product-10-10.webp" },
    { id: 11, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Blue NJ0150-81L ( NJ0150 )", price: 950000, image: "img/products/product-11.webp", image2: "img/products/product-11-11.webp" },
    { id: 12, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Blue NJ0151-88X ( NJ0151 )", price: 950000, image: "img/products/product-12.webp", image2: "img/products/product-12-12.webp" },
];

function displayProducts() {
    const productContainer = document.querySelector(".products-contai");
    productCatalog.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("products-list");
        productElement.innerHTML = `
             <div class="product-hover">
             <button onclick="addToCart(${product.id})"><i class="fas fa-cart-plus" title="Thêm vào giỏ hàng"></i></button>
                <a href="detailProduct.html"><i class="fas fa-eye" title="Xem chi tiết"></i></a>
             </div>
             <img class="img-fetured has-second-img" src="${product.image}" alt="${product.name}">
             <img class="secondary-img" src="${product.image2}" alt="secondary image">
             <p>CITIZEN</p>
             <a href="#" title="">${product.name}</a>
             <div class="star">
                 <i class="fas fa-solid fa-star"></i>
                 <i class="fas fa-solid fa-star"></i>
                 <i class="fas fa-solid fa-star"></i>
                 <i class="fas fa-solid fa-star"></i>
                 <i class="fas fa-solid fa-star"></i>
             </div>
             <div class="price-list">
                 <span class="price">${product.price.toLocaleString()}₫</span>
                 <span class="price-down">13.685.000₫</span>
             </div>
        `;
        productContainer.appendChild(productElement);
    });
}
document.addEventListener("DOMContentLoaded", displayProducts);

function showNotification(product) {
    const notification = document.createElement("div");
    notification.classList.add("cart-notification");

    notification.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="text">
            <p><strong>${product.name}</strong> đã được thêm vào giỏ hàng! 🛒</p>
        </div>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add("show");
    }, 100);

    setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

function addToCart(productId) {
    const product = productCatalog.find(item => item.id === productId);
    if (!product) return;

    const cart = getCart();
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart(cart);
    showNotification(product);
}



