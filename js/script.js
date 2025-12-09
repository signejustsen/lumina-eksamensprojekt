"use strict"

document.addEventListener("DOMContentLoaded", function () {
  // DOM-elementer
  const menuIkon = document.querySelector(".menuikon");
  const kurvIkon = document.querySelector(".kurvikon");
  const heroBtn = document.querySelector(".hero-btn");
  const ctaButtons = document.querySelectorAll(".btn");
  const popupMenu = document.querySelector(".popup-menu");
  const popupKurv = document.querySelector(".kurv-popup");
  const overlay = document.getElementById("overlay");
  const lukMenuBtn = document.getElementById("lukmenu");
  const lukCartBtn = document.getElementById("lukkurv");

  // Åbn menu
  document.querySelector(".menuikon").onclick = () => {
    popupMenu.classList.add("open");
    overlay.classList.add("active");
  };

  //  Åbn kurv
  document.querySelector(".kurvikon").onclick = () => {
    popupKurv.classList.add("open");
    overlay.classList.add("active");
  };

  // Luk når der trykkes på kryds
  document.getElementById("lukmenu").onclick =
    document.getElementById("lukkurv").onclick =
    overlay.onclick =
      () => {
        popupMenu.classList.remove("open");
        popupKurv.classList.remove("open");
        overlay.classList.remove("active");
      };

  if (heroBtn) {
    heroBtn.addEventListener("click", function () {
      popupKurv.classList.add("open");
    });
  }

  // Åbn kurv via ALLE CTA-knapper
  ctaButtons.forEach(function (knap) {
    knap.addEventListener("click", function () {
      popupKurv.classList.add("open");
    });
  });
});