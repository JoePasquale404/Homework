// ВЫПАДАЮЩЕЕ МЕНЮ
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".header__item--dropdown");

  dropdown.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdown.classList.toggle("active");
  });

  document.addEventListener("click", function () {
    dropdown.classList.remove("active");
  });
});

// МОДАЛЬНОЕ ОКНО
document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.querySelector(".header__search");
  const modal = document.getElementById("searchModal");
  const closeBtn = modal.querySelector(".modal__close");

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("show");
    }
  });
});

// СЛАЙДЕР

  const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: '194px'
   

  },
});

// ==================================================
// ИНПУТ

  document.addEventListener("DOMContentLoaded", function() {
  
    const buttons = document.querySelectorAll(".input button");
    const input = document.getElementById("search-input");

   
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        input.value = button.textContent.trim(); 
      });
    });
  });


// ===================================бургер меню

