//Edit Profile

const profile = document.querySelector(".page");
const modal = document.querySelector(".modal");
const editButton = document.querySelector(".profile__edit-profile-button");
const closeButton = document.querySelector(".modal-container__close-button");
const profileName = document.querySelector(".profile__name");
const aboutMe = document.querySelector(".profile__about-me");
const nameInput = document.querySelector("#name");
const aboutMeInput = document.querySelector("#about-me");
const formElement = document.querySelector(".form");

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

//Creating Cards

const cardsContainer = document.querySelector(".photo-card-grid__items");

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

function createCard(place) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".photo-card-grid__item")
    .cloneNode(true);
  const cardTitleElement = cardElement.querySelector(".item__title");
  const cardImageElement = cardElement.querySelector(".item__image");
  cardTitleElement.textContent = place.name;
  cardImageElement.src = place.link;

  cardImageElement.addEventListener("click", () => openCardModal(place));

  return cardElement;
}

function openCardModal(place) {
  pictureModal.classList.remove("picture-modal_invisible");
  const modalImage = document.querySelector(".picture-modal-container__image");
  const modalTitle = document.querySelector(".picture-modal-container__title");
  modalTitle.textContent = place.name;
  modalImage.src = place.link;
}

initialCards.forEach((card) => {
  const cardElement = createCard(card);
  cardsContainer.prepend(cardElement);
});

//Add-Place Button

const placeModal = document.querySelector(".place-modal");
const addPlaceButton = document.querySelector(".profile__add-button");
const titleInput = document.querySelector("#place-title");
const imageUrlInput = document.querySelector("#image-url");
const title = document.querySelector(".item__title");
const imageUrl = document.querySelector(".item__image");
const placeCloseButton = document.querySelector(
  ".place-modal-container__close-button"
);

const placeFormElement = document.querySelector(".place-form");

function handleAddButton() {
  placeModal.classList.remove("place-modal_invisible");
}

function handlePlaceCloseButton() {
  placeModal.classList.add("place-modal_invisible");
}

function handleNewPlaceSubmit(event) {
  event.preventDefault();
  title.textContent = titleInput.value;
  imageUrl.src = imageUrl.value;
  placeModal.classList.add("place-modal_invisible");
}

addPlaceButton.addEventListener("click", handleAddButton);
placeCloseButton.addEventListener("click", handlePlaceCloseButton);
placeFormElement.addEventListener("submit", handleNewPlaceSubmit);

//Like Button

const likeButtons = document.querySelectorAll(".item__like-button");

function handleLikeButtonActivated(event) {
  event.target.classList.add("item__like-button_active");
}

likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", handleLikeButtonActivated);
});

// Delete-Place Button

const deleteButtons = document.querySelectorAll(".item__delete-button");

function handleDeleteButton() {
  const cardElement = document.querySelector(".photo-card-grid__item");
  cardElement.remove();
}

deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener("click", handleDeleteButton);
});

// Open-Picture Modal

const placePictures = document.querySelectorAll(".item__image");
const placeTitle = document.querySelector(".item__title");
const pictureModal = document.querySelector(".picture-modal");
const pictureInput = document.querySelector(".picture-modal-container__image");
const placeTitleInput = document.querySelector(
  ".picture-modal-container__title"
);

const pictureModalCloseButton = document.querySelector(
  ".picture-modal-container__close-button"
);

function handlepictureModalCloseButton() {
  pictureModal.classList.add("picture-modal_invisible");
}

pictureModalCloseButton.addEventListener(
  "click",
  handlepictureModalCloseButton
);
