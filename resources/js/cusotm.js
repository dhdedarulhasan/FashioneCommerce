const searchForm = document.querySelector(".search_form");

document.querySelector("#search_btn").onclick = () => {
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
};

const navbar = document.querySelector(".navbar");

document.querySelector("#menu_bar").onclick = () => {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
};

window.onscroll = () => {
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
};

// Swiper js Start
var swiper = new Swiper(".home_slider", {
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

// Swiper js Start

var swiper = new Swiper(".featured_slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});

// Swiper js Start

var swiper = new Swiper(".review_container", {
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },
    },
});
// Swiper js Start

var swiper = new Swiper(".blog_slider", {
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});
