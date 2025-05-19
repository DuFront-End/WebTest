const productCatalog = [
    { id: 1, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Small Second Blue NK5010-51L", brand: "Citizen",price: 6850000, image: "img/products/product-1.webp", image2: "img/products/product-1-1.webp"},
    { id: 2, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Blue Multiple NJ0151-53W ( NJ0151 )", brand: "Bentley", price: 2490000, image: "img/products/product-2.webp", image2: "img/products/product-2-2.webp" },
    { id: 3, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Demi Rose Black NJ0154-80H ( NJ0154 )", brand: "Automatic", price: 900000, image: "img/products/product-3.webp", image2: "img/products/product-3-3.webp" },
    { id: 4, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Rose Red NJ0153-82X ( NJ0153 )", brand: "Seiko", price: 1040000, image: "img/products/product-4.webp", image2: "img/products/product-4-4.webp" },
    { id: 5, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Gold Green NJ0152-51X", brand: "Citizen", price: 2890000, image: "img/products/product-5.webp", image2: "img/products/product-5-5.webp" },
    { id: 6, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Beige NJ0151-88W ( NJ0151 )", brand: "Orient", price: 2350000, image: "img/products/product-6.webp", image2: "img/products/product-6-6.webp" },
    { id: 7, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Blue Ice Multiple NJ0151-53L ( NJ0151 )", brand: "Casio", price: 1280000, image: "img/products/product-7.webp", image2: "img/products/product-7-7.webp" },
    { id: 8, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Black Multiple NJ0151-53E ( NJ0151 )", brand: "Skagen", price: 950000, image: "img/products/product-8.webp", image2: "img/products/product-8-8.webp" },
    { id: 9, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Tiffany Ice Blue NJ0151-88M ( NJ0151 )", brand: "Guess", price: 950000, image: "img/products/product-9.webp", image2: "img/products/product-9-9.webp" },
    { id: 10, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Orange NJ0151-88Z ( NJ0151 )", brand: "Citizen", price: 950000, image: "img/products/product-10.webp", image2: "img/products/product-10-10.webp" },
    { id: 11, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Blue NJ0150-81L ( NJ0150 )", brand: "Automatic", price: 950000, image: "img/products/product-11.webp", image2: "img/products/product-11-11.webp" },
    { id: 12, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Blue NJ0151-88X ( NJ0151 )", brand: "Seiko", price: 950000, image: "img/products/product-12.webp", image2: "img/products/product-12-12.webp" },
    { id: 13, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Blue NJ0151-88X ( NJ0151 )", brand: "Bentley", price: 950000, image: "img/products/male-1.webp", image2: "img/products/male-1-1.webp" },
    { id: 14, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Blue NJ0151-88X ( NJ0151 )", brand: "Orient", price: 950000, image: "img/products/male-2.webp", image2: "img/products/male-2-2.webp" },
    { id: 15, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Blue NJ0151-88X ( NJ0151 )", brand: "Casio", price: 950000, image: "img/products/male-3.webp", image2: "img/products/male-3-3.webp" },
    { id: 16, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Blue NJ0151-88X ( NJ0151 )", brand: "Guess", price: 950000, image: "img/products/male-4.webp", image2: "img/products/male-4-4.webp" },
    { id: 17, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Blue NJ0151-88X ( NJ0151 )", brand: "Bentley", price: 950000, image: "img/products/male-5.webp", image2: "img/products/male-5-5.webp" },
    { id: 18, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Blue NJ0151-88X ( NJ0151 )", brand: "Guess", price: 950000, image: "img/products/male-6.webp", image2: "img/products/male-6-6.webp" },
    { id: 19, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Blue NJ0151-88X ( NJ0151 )", brand: "Seiko", price: 950000, image: "img/products/male-7.webp", image2: "img/products/male-7-7.webp" },
    { id: 20, name: "Đồng Hồ Nam Citizen Automatic Tsuyosa Mechanical Blue NJ0151-88X ( NJ0151 )", brand: "Bentley", price: 950000, image: "img/products/male-8.webp", image2: "img/products/male-8-8.webp" },
];

function displayProducts(filteredProducts = productCatalog) {
    const productContainer = document.querySelector(".product-grid");
    productContainer.innerHTML = "";
    filteredProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product-item");
        productElement.innerHTML = `
            <div class="product-icon">
                <button onclick="addToCart(${product.id})"><i class="fas fa-cart-plus" title="Thêm vào giỏ hàng"></i></button>
                <i class="fas fa-eye" title="Xem chi tiết"></i>
            </div>
            <img class="img-first" src="${product.image}" alt="Sản phẩm chính">
            <img class="img-second" src="${product.image2}" alt="Ảnh phụ sản phẩm">
            <p>${product.brand}</p>
            <a href="#" title="Xem sản phẩm">${product.name}</a>
            <div class="star-icon">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
            </div>
            <div class="price-products">
                <span class="price">${product.price.toLocaleString()}₫</span>
            </div>
        `;
        productContainer.appendChild(productElement);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
    document.querySelectorAll(".filter-price, .filter-brand").forEach(checkbox => {
        checkbox.addEventListener("change", filterProducts);
    });
});

function filterProducts() {
    const selectedBrands = [...document.querySelectorAll(".filter-brand:checked")].map(cb => cb.value);
    const selectedPriceRanges = [...document.querySelectorAll(".filter-price:checked")].map(cb => cb.value);
    
    let filteredProducts = productCatalog.filter(product => {
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        const matchesPrice = selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => {
            const [min, max] = range.split("-").map(Number);
            return product.price >= min && product.price <= max;
        });
        return matchesBrand && matchesPrice;
    });

    displayProducts(filteredProducts);
}


function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function updateCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("count").innerHTML=cart.length;
}

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


function buy(productId) {
    addToCart(productId); 
    alert("Bạn sẽ được chuyển đến trang thanh toán."); 
    window.location.href = "cart.html"; 
}


