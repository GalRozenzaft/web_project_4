//Edit Profile

const profile = document.querySelector(".page");
const modal = document.querySelector(".modal_type_edit_profile");
const editButton = document.querySelector(".profile__edit-profile-button");
const closeButton = document.querySelector(".close-button_type_edit");
const profileName = document.querySelector(".profile__name");
const aboutMe = document.querySelector(".profile__about-me");
const nameInput = document.querySelector("#name");
const aboutMeInput = document.querySelector("#about-me");
const formElement = document.querySelector(".form");

function handleEditButton(event) {
  nameInput.value = profileName.textContent;
  aboutMeInput.value = aboutMe.textContent;
  modal.classList.remove("modal_invisible");
  event.target.classList.add("profile__edit-profile-button_active");
}

function handleCloseButton(event) {
  modal.classList.add("modal_invisible");
  editButton.classList.remove("profile__edit-profile-button_active");
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
  pictureModal.classList.remove("modal_invisible");
  const modalImage = document.querySelector(".modal-container__image");
  const modalTitle = document.querySelector(".title_type_place_modal");
  modalTitle.textContent = place.name;
  modalImage.src = place.link;
}

initialCards.forEach((card) => {
  const cardElement = createCard(card);
  cardsContainer.prepend(cardElement);
});

//Add-Place

const placeModal = document.querySelector(".modal_type_add_place");
const addPlaceButton = document.querySelector(".profile__add-button");
const titleInput = document.querySelector("#place-title");
const imageUrlInput = document.querySelector("#image-url");
const title = document.querySelector(".item__title");
const imageUrl = document.querySelector(".item__image");
const placeCloseButton = document.querySelector(
  ".close-button_type_place"
);

const placeFormElement = document.querySelector(".form");

function handleAddButton(event) {
  placeModal.classList.remove("modal_invisible");
  event.target.classList.add("profile__add-button_active");
}

function handlePlaceCloseButton(event) {
  placeModal.classList.add("modal_invisible");
  addPlaceButton.classList.remove("profile__add-button_active");
}

function handleNewPlaceSubmit(event) {
  event.preventDefault();
  title.textContent = titleInput.value;
  imageUrl.src = imageUrl.value;
  placeModal.classList.add("modal_invisible");
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

// Open-place Modal

const placePictures = document.querySelectorAll(".item__image");
const placeTitle = document.querySelector(".item__title");
const pictureModal = document.querySelector(".modal_type_open_place");
const pictureInput = pictureModal.querySelector(".image_type_place_modal");
const placeTitleInput = pictureModal.querySelector(
  ".title_type_place_modal"
);

const pictureModalCloseButton = document.querySelector(
  ".close-button_type_place_modal"
);

function handlepictureModalCloseButton() {
  pictureModal.classList.add("modal_invisible");
}

pictureModalCloseButton.addEventListener(
  "click",
  handlepictureModalCloseButton
);
