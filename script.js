const bodyContent = document.getElementById("body-content");
const mobileNav = document.getElementById("mobile-nav-container");
const icons = document.querySelectorAll(".icon");

icons.forEach(icon => {
    icon.addEventListener("click", () => {
        bodyContent.classList.toggle("hide");
        mobileNav.classList.toggle("show");
    });
});