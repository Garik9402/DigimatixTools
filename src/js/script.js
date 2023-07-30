// Запускаем функцию которая прверяет версию браузера
window.onload = function () {
   let raw, version;

   let isIE = /Trident/.test(navigator.userAgent);
   if (isIE) {
      raw = navigator.userAgent.match(/rv:([0-9]+)/);
      version = parseInt(raw[1], 10);
      if (version < 10) {
         alert("Вы используете устаревшую версию Internet Explorer. Пожалуйста, обновите браузер для лучшей производительности.");
      }
   }

   let isEdge = /Edg/.test(navigator.userAgent);
   if (isEdge) {
      raw = navigator.userAgent.match(/Edg\/([0-9]+)/);
      version = parseInt(raw[1], 10);
      // Проверяем, что версия меньше 93
      if (version < 115) {
         alert("Вы используете устаревшую версию Edge. Пожалуйста, обновите браузер для лучшей производительности.");
      }
   }

   let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
   if (isChrome) {
      raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)/);
      version = parseInt(raw[2], 10);
      if (version < 115) {
         alert("Вы используете устаревшую версию Chrome. Пожалуйста, обновите браузер для лучшей производительности.");
      }
   }


   let isFirefox = /Firefox/.test(navigator.userAgent);
   if (isFirefox) {
      raw = navigator.userAgent.match(/Firefox\/([0-9]+)/);
      version = parseInt(raw[1], 10);
      if (version < 115) {
         alert("Вы используете устаревшую версию Firefox. Пожалуйста, обновите браузер для лучшей производительности.");
      }
   }
}

// Переключение табов, замена контента в зависимости от активного таба

document.addEventListener('DOMContentLoaded', (event) => {
   const tablinks = Array.from(document.getElementsByClassName('offers__btn-tab'));
   tablinks.forEach((tablink) => {
      tablink.addEventListener('click', (evt) => openTab(evt, tablink.dataset.tab));
   });

   tablinks[0].click();
});

function openTab(evt, tabName) {
   const tabcontent = Array.from(document.getElementsByClassName("offers__items"));
   tabcontent.forEach((tab) => {
      if ($(tab).hasClass('slick-initialized')) {
         $(tab).slick('unslick');
      }
      tab.style.display = "none";
   });

   const tablinks = Array.from(document.getElementsByClassName("offers__btn-tab"));
   tablinks.forEach((tablink) => {
      tablink.className = tablink.className.replace(" active", "");
   });

   document.getElementById(tabName).style.display = "block";
   evt.currentTarget.className += " active";

   $('#' + tabName).slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      Infinity: true,
      speed: 3000,
      dots: true,
      arrows: true,
      responsive: [{
         breakpoint: 992,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
         },
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
         },
      },
      {
         breakpoint: 508,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         },
      },
      ],
   });
}

// Работа с инпутами
const inputFields = document.querySelectorAll(".form__input");
const labels = document.querySelectorAll(".form__input-lable");

inputFields.forEach((input, index) => {
   const label = labels[index];

   input.addEventListener('focus', () => {
      label.classList.add('up');
      input.classList.add('focused');
   });

   input.addEventListener('blur', () => {
      if (!input.value) {
         label.classList.remove('up');
         input.classList.remove('focused');
      }
   });
});

// Маска
$(document).ready(function () {
   $('.input-phone').mask('+7 (000) 000-0000');
});


// Замена контента для кнопки
let button = document.querySelector('.btn--long');
console.log(button);
window.addEventListener('resize', function (event) {
   if (window.innerWidth < 460) {
      button.innerHTML = "Закажите билет";
   } else {
      button.innerHTML = "Закажите ваш билет";
   }
});

