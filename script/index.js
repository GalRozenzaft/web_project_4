let profile = document.querySelector(".page");
let modal = document.querySelector(".modal");
let editButton = document.querySelector(".profile__edit-profile-button");
let closeButton = document.querySelector(".modal-container__close-button");
let profileName = document.querySelector(".profile__name");
let aboutMe = document.querySelector(".profile__about-me");
let nameInput = document.querySelector("#name");
let aboutMeInput = document.querySelector("#about-me");
let formElement = document.querySelector(".form");

function handleEditButton() {
  nameInput.value = profileName.textContent;
  aboutMeInput.value = aboutMe.textContent;
  modal.classList.remove("modal_invisible");
}

function handleCloseButton() {
  modal.classList.add("modal_invisible");
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  aboutMe.textContent = aboutMeInput.value;
  modal.classList.add("modal_invisible");
}

editButton.addEventListener("click", handleEditButton);
closeButton.addEventListener("click", handleCloseButton);
formElement.addEventListener("submit", handleProfileFormSubmit);
