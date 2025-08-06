  const viewMode = document.querySelector('.view-mode');
  const modeBtnGrid = document.querySelector('.view-mode__btn-grid');
  const modeBtnLine = document.querySelector('.view-mode__btn-line');

  modeBtnGrid.addEventListener('click', () => {
    viewMode.classList.add('view-mode--grid')
    viewMode.classList.remove('view-mode--line')
  })

  modeBtnLine.addEventListener('click', () => {
    viewMode.classList.add('view-mode--line')
    viewMode.classList.remove('view-mode--grid')
  });

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
  slidesPerView: 8.5,
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

const rangeSlider = document.querySelector('.range__slider');
const rangeMin = document.querySelector('.range__min');
const rangeMax = document.querySelector('.range__max');

noUiSlider.create(rangeSlider, {
    start: [300, 3000],
    step: 100,
    range: {
        'min': 300,
        'max': 3000
    },
    format: {
      to: value => Math.round(value),
      from: value => Number(value)
    }
});

rangeSlider.noUiSlider.on('update', (values, handle) => {
    if (handle === 0) {
      rangeMin.value = values[0]
    } else {
      rangeMax.value = values[1]
    }
   
  });

  rangeMin.addEventListener('change', () => {
    rangeSlider.noUiSlider.set([rangeMin.value, null]);
});

rangeMax.addEventListener('change', () => {
    rangeSlider.noUiSlider.set([null, rangeMax.value]);
});

  document.querySelectorAll('.range__item').forEach(el => {
     const text = el.textContent;
    if (/^\d{4}$/.test(text)) {
      // Только если число строго из 4 цифр
      el.textContent = text.replace(/^(\d)(\d{3})$/, '$1,$2');
    }
  });

