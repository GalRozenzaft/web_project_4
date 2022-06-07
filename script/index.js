//Toggling Modals

function toggleModal(event) {
  event.classList.toggle("modal_invisible");
}

//Edit Profile

const profile = document.querySelector(".page");
const editProfileModal = document.querySelector(".modal_type_edit_profile");
const editButton = document.querySelector(".profile__edit-profile-button");
const editProfileCloseButton = document.querySelector(
  ".close-button_type_edit"
);
const profileName = document.querySelector(".profile__name");
const aboutMe = document.querySelector(".profile__about-me");
const nameInput = document.querySelector("#name");
const aboutMeInput = document.querySelector("#about-me");
const editFormElement = document.querySelector(
  ".edit-profile-modal-container__form"
);

function fillProfileForm(event) {
  editButton.classList.add("profile__edit-profile-button_active");
  nameInput.value = profileName.textContent;
  aboutMeInput.value = aboutMe.textContent;
  toggleModal(editProfileModal);
}

function EditProfileCloseButton(event) {
  editButton.classList.remove("profile__edit-profile-button_active");
  toggleModal(editProfileModal);
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  aboutMe.textContent = aboutMeInput.value;
  editButton.classList.remove("profile__edit-profile-button_active");
  toggleModal(editProfileModal);
}

editButton.addEventListener("click", fillProfileForm);

editProfileCloseButton.addEventListener("click", EditProfileCloseButton);

editFormElement.addEventListener("submit", handleProfileFormSubmit);

//Creating Places Cards

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
  cardImageElement.alt = place.name;

  cardImageElement.addEventListener("click", () => {
    openZoomedplaceModal(place);
  });

  return cardElement;
}

initialCards.forEach((card) => {
  const cardElement = createCard(card);
  cardsContainer.append(cardElement);
});

//Add-Place Modal

const placeModal = document.querySelector(".modal_type_add_place");
const addPlaceButton = document.querySelector(".profile__add-button");
const titleInput = placeModal.querySelector("#place-title");
const imageUrlInput = placeModal.querySelector("#image-url");
const title = document.querySelector(".item__title");
const image = document.querySelector(".item__image");
const placeCloseButton = placeModal.querySelector(".close-button_type_place");
const placeFormElement = placeModal.querySelector(
  ".add-place-modal-container__form"
);

function handleAddButton(event) {
  addPlaceButton.classList.add("profile__add-button_active");
  toggleModal(placeModal);
}

function handlePlaceFormCloseButton(event) {
  addPlaceButton.classList.remove("profile__add-button_active");
  toggleModal(placeModal);
}

function newPlaceCreation(event) {
  event.preventDefault();
  title.textContent = titleInput.value;
  image.src = imageUrlInput.value;
  addPlaceButton.classList.remove("profile__add-button_active");
  toggleModal(placeModal);
}

addPlaceButton.addEventListener("click", handleAddButton);

placeCloseButton.addEventListener("click", handlePlaceFormCloseButton);

placeFormElement.addEventListener("submit", newPlaceCreation);

// Open Zoomed-Place-Modal

function openZoomedplaceModal(place) {
  const zoomedModalImage = document.querySelector(".modal-container__image");
  const ZoomedModalTitle = document.querySelector(".title_type_place_modal");
  ZoomedModalTitle.textContent = place.name;
  zoomedModalImage.src = place.link;
  toggleModal(pictureModal);
}

// Close Zoomed-Place-Modal

const placePictures = document.querySelectorAll(".item__image");
const placeTitle = document.querySelector(".item__title");
const pictureModal = document.querySelector(".modal_type_open_place");
const pictureInput = pictureModal.querySelector(".image_type_place_modal");
const placeTitleInput = pictureModal.querySelector(".title_type_place_modal");
const zoomedPlaceModalCloseButton = document.querySelector(
  ".close-button_type_place_modal"
);

function handleZoomedPlaceModalCloseButton() {
  toggleModal(pictureModal);
}

zoomedPlaceModalCloseButton.addEventListener(
  "click",
  handleZoomedPlaceModalCloseButton
);

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
