window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  var moveUpBtn = document.getElementById("moveUpBtn");
  var navLinks = document.querySelectorAll("nav a");
  var navButtons = document.querySelectorAll("nav button");
  var logoImg = document.querySelector("nav img");
  var newLogoSrc = "assets/main-logo -2.png"; // Replace with the path to your new logo

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
});

document.getElementById("moveUpBtn").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.querySelector(".burger-menu").addEventListener("click", function () {
  document.querySelector(".new").classList.toggle("active");
});
