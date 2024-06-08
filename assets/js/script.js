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




// image 

// document.querySelectorAll(' .project-item .product-img img').forEach(image =>{
//   image.onclick = () =>{
//     document.querySelector('.popup-image').style.display = 'block';
//     document.querySelector('.popup-image img').src = image.getAttribute('src');
//   }
// });
// document.querySelector('.popup-image span').onclick = () =>{
//   document.querySelector('.popup-image').style.display = 'none';}


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-item img').forEach(image => {
    image.onclick = () => {
      document.querySelector('.popup-image').style.display = 'block';
      document.querySelector('.popup-image img').src = image.getAttribute('src');
    };
  });

  document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
  };
});



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

//  contact 
const scriptURL = 'https://script.google.com/macros/s/AKfycbzHNgZ3-CSx4QAJZQMnvXRSb10mNnpD40HMam3C8mJf-26BQHve0IWpvjlLnj_XRsvg/exec'
const forms = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})


// alert 
// function message(e) {
//   e.preventDefault();
//   var name = document.getElementById('name');
//   var email = document.getElementById('email');
//   var msg = document.getElementById('msg');
//   const success = document.getElementById('success');
//   const danger = document.getElementById('danger');

//   if (name.value === '' || email.value === '' || msg.value === '') {
//     danger.style.display = 'block';
//     success.style.display = 'none'; // Ensure success message is hidden if danger is shown
//   } else {
//     setTimeout(() => {
//       name.value = '';
//       email.value = '';
//       msg.value = '';
//     }, 2000);
//     success.style.display = 'block';
//     danger.style.display = 'none'; // Ensure danger message is hidden if success is shown
//   }

//   setTimeout(() => {
//     danger.style.display = 'block'; // Fixed the typo here
//     success.style.display = 'none';
//   }, 4000);
// }


const formi = document.getElementById('contact-form');

form.addEventListener('submit', message);

function message(e) {
  e.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const msg = document.getElementById('msg');
  const success = document.getElementById('success');
  const danger = document.getElementById('danger');

  if (name.value === '' || email.value === '' || msg.value === '') {
    danger.style.display = 'block';
    success.style.display = 'none';
  } else {
    setTimeout(() => {
      name.value = '';
      email.value = '';
      msg.value = '';
    }, 2000);
    success.style.display = 'block';
    danger.style.display = 'none';
  }

  setTimeout(() => {
    danger.style.display = 'none';
    success.style.display = 'none';
  }, 4000);
}




