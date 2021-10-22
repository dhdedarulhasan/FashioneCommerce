const navbar = document.querySelector(".navbar");

document.querySelector("#menu_bar").onclick = () => {
    navbar.classList.toggle("active");
};

const search_form = document.querySelector(".search_form");

document.querySelector("#search_icon").onclick = () => {
    search_form.classList.toggle("active");
};
