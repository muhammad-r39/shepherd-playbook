"use strict";

const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", function () {
  const nav = document.querySelector("nav");
  const menu = document.querySelector("nav .menu-items");

  if (nav.classList.contains("open")) {
    // Set max-height to 0 to collapse
    menu.style.maxHeight = "0";
    nav.classList.remove("open");
  } else {
    // Set max-height to scrollHeight to expand
    menu.style.maxHeight = menu.scrollHeight + "px";
    nav.classList.add("open");
  }
});
