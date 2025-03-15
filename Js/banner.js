document.addEventListener("DOMContentLoaded", function () {
    const bannerList = document.querySelector('.banner-list-end');
    const parentWidth = bannerList.parentElement.offsetWidth;
    const bannerWidth = bannerList.scrollWidth;
    let scrollAmount = 0;
    const scrollSpeed = 4; 

    function scrollImages() {
        scrollAmount += scrollSpeed;

        if (scrollAmount >= bannerWidth) {
            scrollAmount = 0;
        }

        bannerList.style.transform = `translateX(-${scrollAmount}px)`;
        requestAnimationFrame(scrollImages);
    }

    scrollImages();
});

