window.onload = function () {
  var nav = document.querySelector(".nav");
  var hamburger = document.querySelector(".hamburger");

  hamburger.onclick = function () {
    nav.classList.toggle("closed");
    hamburger.classList.toggle("closed");
  };
};

// custom title //

//
document.addEventListener("DOMContentLoaded", function () {
  const heroTitle = document.querySelector(".hero__title");
  heroTitle.classList.add("fade-in");
});

document.addEventListener("DOMContentLoaded", function () {
  const heroTitle = document.querySelector(".hero__title");
  heroTitle.classList.add("hovered");
});

var animation = bodymovin.loadAnimation({
  container: document.getElementById("anim"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "twinkle-online-education.json",
});
