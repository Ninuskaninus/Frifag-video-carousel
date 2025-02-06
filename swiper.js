const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 15,
  slidesPerView: 1,
  slidesPerGroup: 1,

  breakpoints: {
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    425: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
  centeredSlides: false,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: false,
  },
});
