window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  var moveUpBtn = document.getElementById("moveUpBtn");
  var navLinks = document.querySelectorAll("nav a");
  var navButtons = document.querySelectorAll("nav button");
  var logoImg = document.querySelector("nav img");
  var newLogoSrc = "assets/main-logo -2.png";

  if (window.scrollY > 50) {
    nav.classList.add("scroll");

    navLinks.forEach((link) => {
      link.style.color = "white";
    });

    navButtons.forEach((button) => {
      button.classList.add("button-scroll");
    });

    logoImg.src = newLogoSrc;
  } else {
    nav.classList.remove("scroll");

    navLinks.forEach((link) => {
      link.style.color = "black";
    });

    navButtons.forEach((button) => {
      button.classList.remove("button-scroll");
    });

    logoImg.src = "assets/main-logo-1.png";
  }

  if (window.scrollY > 2000) {
    moveUpBtn.style.display = "block";
  } else {
    moveUpBtn.style.display = "none";
  }
});document.getElementById("moveUpBtn").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const links = document.querySelectorAll('.new a');
const newDiv = document.getElementById('new');

document.querySelector(".burger-menu").addEventListener("click", function () {
  newDiv.classList.toggle("active");
});

function hideDiv() {
  newDiv.classList.remove("active");
}

links.forEach(link => {
  link.addEventListener('click', hideDiv);
});

document.addEventListener('click', function(event) {
  if (!newDiv.contains(event.target) && !event.target.closest('.burger-menu')) {
    hideDiv();
  }
});
