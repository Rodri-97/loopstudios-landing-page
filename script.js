const bodyContent = document.getElementById("body-content");
const headerClone = document.getElementById("header-clone");
const icons = document.querySelectorAll(".icon");

icons.forEach(icon => {
    icon.addEventListener("click", () => {
        bodyContent.classList.toggle("hide");
        headerClone.classList.toggle("show");
    });
});