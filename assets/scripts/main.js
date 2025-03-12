// burger
let burger_btn = document.querySelector('.burger');
let nav_bg = document.querySelector('.nav_bg');
let body_in = document.querySelector('.body_in');

burger_btn.addEventListener('click', () => {
  nav_bg.classList.toggle('active');
  body_in.classList.toggle('active');
})
// burger

// nav
document.addEventListener('DOMContentLoaded', function () {
  const navBtn = document.querySelector('.nav_btn');
  const navContent = document.querySelector('.nav_content');

  navBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      navContent.classList.toggle('active');
      navBtn.classList.toggle('active');
  });

  document.addEventListener('click', function (e) {
      if (!navContent.contains(e.target) && !navBtn.contains(e.target)) {
          navContent.classList.remove('active');
          navBtn.classList.remove('active');
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const navBtn = document.querySelector('.nav_btn_two');
  const navContent = document.querySelector('.nav_content_two');

  navBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      navContent.classList.toggle('active');
      navBtn.classList.toggle('active');
  });

  document.addEventListener('click', function (e) {
      if (!navContent.contains(e.target) && !navBtn.contains(e.target)) {
          navContent.classList.remove('active');
          navBtn.classList.remove('active');
      }
  });
});
// nav

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

document.querySelectorAll('.tabs-container').forEach(container => {
  container.addEventListener('click', (e) => {
      const tab = e.target.closest('.tab');
      if (!tab) return;

      const targetTab = tab.getAttribute('data-tab');

      container.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      container.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

      tab.classList.add('active');
      container.querySelector(`#${targetTab}`)?.classList.add('active');
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
