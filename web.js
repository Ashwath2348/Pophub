document.addEventListener("DOMContentLoaded", function () {
    const content = document.querySelector(".content");
    content.style.opacity = "0";
    content.style.transform = "translateY(-20px)";
    setTimeout(() => {
        content.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        content.style.opacity = "1";
        content.style.transform = "translateY(0)";
    }, 500);
});

