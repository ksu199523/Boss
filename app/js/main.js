  const openBtn = document.querySelector('.open-modal');
  const modal = document.querySelector('.modal');
  const modalOverlay = document.querySelector('.modal__overlay');
   const closeBtn = document.querySelector('.close-modal');

  function openModal() {
    modal.setAttribute('aria-hidden', 'false')
    document.body.classList.add('scroll-lock')
  }
  
  function closeModal() {
    modal.setAttribute('aria-hidden', 'true')
    document.body.classList.remove('scroll-lock')
  }
  
  if(modalOverlay){
    modalOverlay.addEventListener('click', closeModal)
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal)

  document.addEventListener('keydown', (e) =>{
    if( e.key = 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeModal()
    }
  })
  
  const openPopupBtn = document.querySelector('.catalog__popup');
  const popup = document.querySelector('.popup');
  const popupOverlay = document.querySelector('.popup__overlay');
  const closePopupBtn = document.querySelector('.close-popup');

  function openPopup() {
    popup.setAttribute('aria-hidden', 'false')
    document.body.classList.add('scroll-lock')
  }
  
  function closePopup() {
    popup.setAttribute('aria-hidden', 'true')
    document.body.classList.remove('scroll-lock')
   }
  
   if(popupOverlay){
      popupOverlay.addEventListener('click', closePopup)
  }

    openPopupBtn.addEventListener('click', openPopup);
    closePopupBtn.addEventListener('click', closePopup)

  document.addEventListener('keydown', (e) =>{
   if( e.key = 'Escape' && popup.getAttribute('aria-hidden') === 'false') {
    closePopup()
   }
 })



  const breakpoint = window.matchMedia('(min-width: 480px)');
  let sliderMobile = null;

  function initSwipper(){
    sliderMobile = new Swiper('.product__slider-mobile', {

      loop: true,
        slidesPerView: 1,
        centeredSlides: true,
  
      navigation: {
       nextEl: '.product__slider-arrow_next',
        prevEl: '.product__slider-arrow_prev',
  },
  });
  }
  
   function destroySwipper(){
      if(sliderMobile){
        sliderMobile.destroy(true, true);
        sliderMobile = null;
      }
  }
  
  function handleBreakpointChange(e) {
   if (e.matches){
    destroySwipper()
   } else {
    if(!sliderMobile) initSwipper();
   }
  }

  handleBreakpointChange(breakpoint);

  breakpoint.addEventListener('change', handleBreakpointChange);
  




  const headerBtn = document.querySelector('.header__btn');
  const menu = document.querySelector('.menu');

    headerBtn.addEventListener('click', () => {
      console.log('Кнопка нажата');
    menu.classList.toggle('menu--active');
    });

  const viewMode = document.querySelector('.view-mode');
  const modeBtnGrid = document.querySelector('.view-mode__btn-grid');
  const modeBtnLine = document.querySelector('.view-mode__btn-line');

  modeBtnGrid?.addEventListener('click', () => {
    viewMode.classList.add('view-mode--grid')
    viewMode.classList.remove('view-mode--line')
  })

  modeBtnLine?.addEventListener('click', () => {
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
  
   breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
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

      breakpoints: {
        200: {
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
        360: {
          slidesPerView: 4.5,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 6.5,
          spaceBetween: 10,
        },
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

