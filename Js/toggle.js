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

