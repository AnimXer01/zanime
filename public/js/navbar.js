const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    const headerHeight = document.getElementById("header").offsetHeight;
    const navbar = document.getElementById("navbar");
    if (window.scrollY > headerHeight - 80) {
        navbar.style.backgroundColor = "#101820";
        navbar.style.transition = "background-color 0.5s";
    } else {
        navbar.style.backgroundColor = "";
        navbar.style.transition = "";
    }
});
