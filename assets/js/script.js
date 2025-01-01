'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



// Função para rolar suavemente até um elemento específico
const scrollToElement = (selector, offset = 0) => {
  const element = document.querySelector(selector);
  if (element) {
    const top = element.offsetTop + offset;
    window.scrollTo({
      top: top,
      behavior: "smooth"
    });
  }
};


// Lazy Loading de Imagens e Iframes
// Esse script adia o carregamento de imagens e iframes até que estejam próximos de serem exibidos

document.addEventListener("DOMContentLoaded", function () {
  const lazyLoad = () => {
    const lazyElements = document.querySelectorAll("img[data-src], iframe[data-src]");
    const windowHeight = window.innerHeight;

    lazyElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < windowHeight + 200) {
        if (element.dataset.src) {
          element.src = element.dataset.src;
          element.removeAttribute("data-src");
        }
      }
    });
  };

  window.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  lazyLoad(); // Executa ao carregar a página
});


// Animações Suaves ao Rolagem (Smooth Scroll)
// Adiciona uma experiência fluida ao rolar para links âncora.



document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});


//Minimizar a Re-renderização com requestAnimationFrame

let ticking = false;

const optimizeScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Insira aqui a lógica que deve ocorrer durante o scroll
      console.log("Scrolling...");
      ticking = false;
    });
    ticking = true;
  }
};

window.addEventListener("scroll", optimizeScroll);


// Preloader Simples
document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.createElement("div");
  preloader.id = "preloader";
  preloader.style = `
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: #fff url('spinner.gif') no-repeat center center;
    z-index: 9999;
  `;
  document.body.appendChild(preloader);

  window.addEventListener("load", () => {
    preloader.style.opacity = "0";
    setTimeout(() => preloader.remove(), 500);
  });
});


// Script para Melhorar Performance (Debounce e Throttle)

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

window.addEventListener("resize", debounce(() => {
  console.log("Resize otimizado!");
}, 200));

const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return (...args) => {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

window.addEventListener("scroll", throttle(() => {
  console.log("Scroll otimizado!");
}, 200));


// Gerenciamento de Estados do Usuário
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    console.log("Página está oculta");
    // Pausar animações ou outros processos
  } else {
    console.log("Página visível novamente");
    // Retomar atividades pausadas
  }
});

// Cache Dinâmico com Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then((registration) => {
    console.log('Service Worker registrado:', registration);
  });
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => cache.addAll(['/index.html', '/styles.css', '/script.js']))
  );
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});

