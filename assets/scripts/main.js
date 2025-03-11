// burger
// let burger_btn = document.querySelector('.burger_btn');
// let media_nav = document.querySelector('.media_nav');
// let nav_bg = document.querySelector('.nav_bg');
// let body_in = document.querySelector('.body_in');
// let media_nav_close = document.querySelector('.media_nav_close');

// burger_btn.addEventListener('click', () => {
//   media_nav.classList.toggle('active');
//   nav_bg.classList.add('active');
//   body_in.classList.add('active');
// })

// media_nav_close.addEventListener('click', () => {
//   media_nav.classList.remove('active');
//   nav_bg.classList.remove('active');
//   body_in.classList.remove('active');
// })

// nav_bg.addEventListener('click', () => {
//   media_nav.classList.remove('active');
//   nav_bg.classList.remove('active');
//   body_in.classList.remove('active');
// })
// burger

let swiper = new Swiper(".clientsSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
    993: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', (e) => {
      const targetTab = e.target.getAttribute('data-tab');

      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
  });
});

function initLanguageSelect() {
  document.querySelectorAll('.language-select').forEach(selectContainer => {
      const selectedLanguage = selectContainer.querySelector('.selected-language');
      const optionsContainer = selectContainer.querySelector('.language-options');

      selectedLanguage.addEventListener('click', () => {
          optionsContainer.classList.toggle('show');
      });

      selectContainer.querySelectorAll('.language-option').forEach(option => {
          option.addEventListener('click', (e) => {
              const selectedText = e.target.textContent;
              selectedLanguage.textContent = selectedText;
              optionsContainer.classList.remove('show');
          });
      });

      document.addEventListener('click', (e) => {
          if (!selectContainer.contains(e.target)) {
              optionsContainer.classList.remove('show');
          }
      });
  });
}

document.addEventListener('DOMContentLoaded', initLanguageSelect);
