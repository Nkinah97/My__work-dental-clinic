
$(window).on('load',function() {
  $("#container1").twentytwenty();
  });

  AOS.init({
    duration:1100,
    disable: window.innerWidth < 600,
  });


document.querySelectorAll('.faq__question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const isActive = item.classList.contains('faq__question-show');

    document.querySelectorAll('.faq__question-wrapper').forEach(wrapper => {
      wrapper.classList.remove('faq__question-show');
    });

    if (!isActive) {
      item.classList.add('faq__question-show');
    }
  });
});


// const swiper = new Swiper('.testimonials-swiper', {
//   direction: 'horizontal',
//   duration: 1400,
//   loop: true,
//   effect: 'slider',
//   // cubeEffect: {
//   //   shadow: false,
//   // },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

const swiper = new Swiper('.testimonials-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'cube', // Додаємо ефект куба
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  // If we need pagination
  pagination: {
    el: '.testimonials-swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar

});



const swiper2 = new Swiper('.swiper-gallery', {
  duration: 1400,
  // slidesPerView: 3, // Встановлюємо 3 слайди за замовчуванням
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1300: { // Для всіх екранів 1300 пікселів і менше
      slidesPerView: 3,
      spaceBetween: 20,
    },
    700: { // Для всіх екранів 1300 пікселів і менше
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});



const swiper3 = new Swiper('.swiper-blogs', {
  direction: 'horizontal',
  loop: true,
  duration: 1400,
  // slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1190: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 2.2,
      spaceBetween: 40,
    },


  },
});


const swiper4 = new Swiper('.swiper-dental', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,
  duration: 1400,
  autoplay: {
    delay: 3000, // Інтервал у мілісекундах
    disableOnInteraction: false,
  },

  slidesPerView:2,

  breakpoints: {
    620: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    820: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1100: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiper5 = new Swiper('.services__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  duration: 2400,
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false,
  },

breakpoints: {

  0: {
    slidesPerView: 0.01,
  },


    1200: {
      slidesPerView: 0.5,

    },
  },


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiper6 = new Swiper('.testimonials__page-one-swiper', {
  direction: 'horizontal',
  duration: 1400,
  loop: true,
  slidesPerView: 1, 

  breakpoints: {
    

    100: { // При ширині вікна <= 1000px
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1150: { // При ширині вікна <= 1000px
      slidesPerView: 3,
      spaceBetween: 30,
    },

  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



window.onclick = function(event) {
  if (event.target == document.getElementById('modal')) {
      document.getElementById('modal').style.display = "none";
      document.getElementById('videoFrame').src = "";
  }
}


document.addEventListener("DOMContentLoaded", function() {
  Fancybox.bind("[data-fancybox]", {
      
  });
});


const headerMobileBtn = document.querySelector('.header__menu-mobile')
const headerMobileBtnClose = document.querySelector('.header__bottom-mobile-close-btn')
const menuMobile = document.querySelector('.menu__nav-mobile')


headerMobileBtn.addEventListener('click',()=> {
  menuMobile.classList.add('active')
})

headerMobileBtnClose.addEventListener('click',()=> {
  menuMobile.classList.remove('active')
})





document.addEventListener('DOMContentLoaded', ()=> {
const timerBtn = document.querySelector('.offer__time-btn')
let timer = 240;

function updateTimer() {
  if (timer > 0) {
    timerBtn.textContent = `${timer} s`
    setTimeout (updateTimer,1000)
    timer--;
  }
  else {
        timerBtn.textContent = `Час вийшов!`
  }
}
updateTimer()
})

