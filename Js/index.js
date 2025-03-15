let images = [
    "img/Sliders/slider_1.webp", 
    "img/Sliders/slider_2.webp", 
    "img/Sliders/slider_3.webp",
];
	let index = 0;

	function prev() {
		index--;
		if (index < 0) {
			index = images.length - 1;
		}
		document.getElementById('image').src = images[index];
	}

	function next() {
		index++;
		if (index == images.length) {
			index = 0;
		}
		document.getElementById('image').src = images[index];
	}

	setInterval(next, 2000);

const bannerList = document.querySelector('.banner-list');
const img = document.querySelectorAll('.banner-img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const addcloneImg = Array.from(img).map(image => image.cloneNode(true));
addcloneImg.forEach(clone => bannerList.appendChild(clone));

const totalWidth = img.length * (img[0].offsetWidth + 16); 
let imgOrigin = 0;

function scrollimg() {
    imgOrigin -= img[0].offsetWidth + 16; 
    if (Math.abs(imgOrigin) >= totalWidth) {
        imgOrigin = 0; 
    }
    bannerList.style.transition = 'transform 0s'; 
    bannerList.style.transform = `translateX(${imgOrigin}px)`;
}

function moveNext() {
    imgOrigin -= img[0].offsetWidth + 16;
    if (Math.abs(imgOrigin) >= totalWidth) {
        imgOrigin = 0; 
    }
    bannerList.style.transition = 'transform 1s ease';
    bannerList.style.transform = `translateX(${imgOrigin}px)`;
}


function movePrev() {
    imgOrigin += img[0].offsetWidth + 16; 
    if (imgOrigin > 0) {
        imgOrigin = -totalWidth + img[0].offsetWidth + 16; 
    }
    bannerList.style.transition = 'transform 1s ease'; 
    bannerList.style.transform = `translateX(${imgOrigin}px)`;
}

nextBtn.addEventListener('click', moveNext);
prevBtn.addEventListener('click', movePrev);

const autoScroll = setInterval(scrollimg, 2000);

nextBtn.addEventListener('click', () => clearInterval(autoScroll));
prevBtn.addEventListener('click', () => clearInterval(autoScroll));


function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function updateCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("count").innerHTML=cart.length;
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
    alert(`Sản phẩm "${product.name}" đã được thêm vào giỏ hàng!`);
}

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle"),
          mobileMenu = document.querySelector(".mobile-menu"),
          closeBtn = document.querySelector(".close-btn");

    if (!menuToggle || !mobileMenu) return;

    const toggleMenu = () => mobileMenu.classList.toggle("active");
    const closeMenu = () => mobileMenu.classList.remove("active");

    menuToggle.addEventListener("click", toggleMenu);
    closeBtn?.addEventListener("click", closeMenu);

    document.addEventListener("click", (e) => {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) closeMenu();
    });
});