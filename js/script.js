"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal");
  const modalTrigger = document.querySelector(".menu-header");
  const closeButton = document.querySelector(".close-btn-modal");

  function openModal() {
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  modalTrigger.addEventListener("click", openModal);
  closeButton.addEventListener("click", closeModal);
});
