  const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      425: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      }
    },

  centeredSlides: false,  

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

  scrollbar: {
    el: false,
  },
});