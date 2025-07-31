const swiper = new Swiper('.lookperfect__slider', {

  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  
  navigation: {
    nextEl: '.lookperfect__arrow-next',
    prevEl: '.lookperfect__arrow-prev',
  },

});   

const rewiewsswiper = new Swiper('.rewiews__slider', {

  loop: true,
  slidesPerView: 8,
  spaceBetween: 10,
  
  navigation: {
    nextEl: '.rewiews__arrow-next',
    prevEl: '.rewiews__arrow-prev',
  },

  pagination: {
    el: ".rewiews__pagination",
    type: "fraction",
      },
});  