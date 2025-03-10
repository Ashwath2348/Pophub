// Animate Header on Scroll
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.transform = "translateY(-100px)";
    } else {
        header.style.transform = "translateY(0)";
    }
});

// Menu Toggle for Mobile
document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});
