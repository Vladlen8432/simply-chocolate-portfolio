"use strict";

/* ========== Open/Close button ========== */

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

/* ========== Play video ========== */

document.addEventListener("DOMContentLoaded", function () {
  const buttonVideo = document.querySelector(".button-video");

  buttonVideo.addEventListener("click", function () {
    const container = buttonVideo.closest(".container-preview-video");
    const pictureElement = container.querySelector("picture");

    pictureElement.remove();

    const iframeElement = document.createElement("iframe");
    iframeElement.src =
      "https://www.youtube.com/embed/KEqpwpfFfhE?si=MhbrZOQsdM2LRDGK&autoplay=1";

    iframeElement.title = "YouTube video player";
    iframeElement.frameborder = "0";
    iframeElement.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

    iframeElement.allowfullscreen = true;

    container.appendChild(iframeElement);

    buttonVideo.style.display = "none";
  });
});
