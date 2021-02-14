// const base_url = "https://destination-backend.mawingunetworks.com/";
const base_url = "https://backend.greenbilltours.co.ke/";
// const base_url = "http://localhost:5003/";

// Service worker registration
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => {
      // console.log('service worker registered', reg);
    })
    .catch((e) => {
      // console.log('service worker not registered', e);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  // nav menu
  const menus = document.querySelectorAll(".side-menu");
  M.Sidenav.init(menus, {
    edge: "right",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".fixed-action-btn");
  var options = {
    direction: "top",
    hoverEnabled: false,
    toolbarEnabled: false,
  };
  var instances = M.FloatingActionButton.init(elems, options);
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("select");
  var options = {
    classes: "filter-wrapper",
  };
  var instances = M.FormSelect.init(elems, options);
});

function openSearch() {
  document.getElementById("modal-custom").style.display = "block";
}

function closeSearch() {
  document.getElementById("modal-custom").style.display = "none";
}

function openDesc() {
  document.getElementById("merchant-desc").style.display = "block";
}

function closeDesc() {
  document.getElementById("merchant-desc").style.display = "none";
}

// lightbox gallery slider below
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  let s = parseInt(n);
  showSlides((slideIndex = s));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
