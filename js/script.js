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
    const container = buttonVideo.closest(".container-video");

    const previewVideoContainer = container.querySelector(
      ".container-preview-video"
    );

    previewVideoContainer.remove();

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

/* ========== Ingredient modal open ========== */

function setupIngredientSection(imageId, descrId, backId) {
  const imageSection = document.getElementById(imageId);
  const descrSection = document.getElementById(descrId);
  const imageSectionReturn = document.getElementById(backId);

  imageSection.addEventListener("click", function () {
    descrSection.style.display = "block";
    imageSection.style.display = "none";
  });

  imageSectionReturn.addEventListener("click", function () {
    descrSection.style.display = "none";
    imageSection.style.display = "flex";
  });
}

setupIngredientSection(
  "image-ingredient-milk-chocolate",
  "descr-ingredient-milk-chocolate",
  "back-chocolate"
);
setupIngredientSection(
  "image-ingredient-milk",
  "descr-ingredient-milk",
  "back-milk"
);
setupIngredientSection(
  "image-ingredient-nuts",
  "descr-ingredient-nuts",
  "back-nuts"
);
setupIngredientSection(
  "image-ingredient-semi",
  "descr-ingredient-semi",
  "back-semi"
);
