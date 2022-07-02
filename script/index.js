//Toggling Modals

function toggleModal(event) {
  console.log("toggleModal called");
  event.classList.toggle("modal_invisible");
}

//Edit Profile

const profile = document.querySelector(".profile");
const editButton = profile.querySelector(".profile__edit-profile-button");
const profileName = profile.querySelector(".profile__name");
const profileAboutMe = profile.querySelector(".profile__about-me");
const editProfileModal = document.querySelector(".modal_type-edit-profile");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal-container__close-button_type-edit"
);
const nameInput = editProfileModal.querySelector("#name");
const profileAboutMeInput = editProfileModal.querySelector("#about-me");
const editProfileFormElement = editProfileModal.querySelector(
  ".form_edit-profile-modal-container"
);
const editProfileModalContainer = editProfileModal.querySelector(
  ".modal-container_type-edit-profile"
);

const editProfileOverlay = editProfileModal.querySelector(
  ".modal-overlay_type-edit-profile"
);

function fillProfileForm(event) {
  nameInput.value = profileName.textContent;
  profileAboutMeInput.value = profileAboutMe.textContent;
}

function handleEditProfileCloseButton(event) {
  console.log("handleEditProfileCloseButton called");
  toggleModal(editProfileModal);
}

function handleEditProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAboutMe.textContent = profileAboutMeInput.value;
  toggleModal(editProfileModal);
}

function handleOpenProfileForm() {
  fillProfileForm();
  toggleModal(editProfileModal);
}

//Creating Places Cards

const cardsContainer = document.querySelector(".photo-card-grid__items");
const addPlaceModal = document.querySelector(".modal_type-add-place");
// const addPlaceModalContainer = addPlaceModal.querySelector(
//   ".modal-container_type-add-place"
// );
const addPlaceButton = document.querySelector(".profile__add-button");
const titleInput = addPlaceModal.querySelector("#place-title");
const imageUrlInput = addPlaceModal.querySelector("#image-url");
const cardTitleElement = document.querySelector(".item__title");
const cardImageElement = document.querySelector(".item__image");
const placeCloseButton = addPlaceModal.querySelector(
  ".modal-container__close-button_type-place"
);
const placeFormElement = addPlaceModal.querySelector(
  ".form_add-place-modal-container"
);

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

function createCard(card) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".photo-card-grid__item")
    .cloneNode(true);
  const cardTitleElement = cardElement.querySelector(".item__title");
  const cardImageElement = cardElement.querySelector(".item__image");
  cardTitleElement.textContent = card.name;
  cardImageElement.src = card.link;
  cardImageElement.alt = card.name;

  cardImageElement.addEventListener("click", () => {
    openZoomedPlaceModal(card);
  });

  const likeButton = cardElement.querySelector(".item__like-button");
  likeButton.addEventListener("click", handleLikeButtonToggle);

  const deleteButton = cardElement.querySelector(".item__delete-button");
  deleteButton.addEventListener("click", handleDeleteButton);

  return cardElement;
}

function handleNewPlaceCreation(event) {
  event.preventDefault();
  const card = {
    name: titleInput.value,
    link: imageUrlInput.value,
  };
  const cardElement = createCard(card);

  cardsContainer.prepend(cardElement);
  placeFormElement.reset();
  toggleModal(addPlaceModal);
}

// Add-Place Button And Add-Place Modal Close Button

function handleAddButton(event) {
  toggleModal(addPlaceModal);
}

function handlePlaceFormCloseButton(event) {
  toggleModal(addPlaceModal);
}

// Zoomed-Place-Modal

const zoomedPlaceModal = document.querySelector(".modal_type-open-place");
// const zoomedPlaceModalContainer = zoomedPlaceModal.querySeector(".modal-container_type-open-place");
const zoomedPlaceImageInput = zoomedPlaceModal.querySelector(
  ".modal-container__image_type-place-modal"
);
const zoomedPlaceTitleInput = zoomedPlaceModal.querySelector(
  ".modal-container__title_type-place-modal"
);
const zoomedPlaceModalCloseButton = document.querySelector(
  ".modal-container__close-button_type-place-modal"
);

function openZoomedPlaceModal(place) {
  zoomedPlaceTitleInput.textContent = place.name;
  zoomedPlaceImageInput.src = place.link;
  toggleModal(zoomedPlaceModal);
}

// Like And Delete Buttons Handlers

function handleLikeButtonToggle(event) {
  event.target.classList.toggle("item__like-button_active");
}

function handleDeleteButton(event) {
  event.target.parentElement.remove();
}

function initialize() {
  initialCards.forEach((card) => {
    const cardElement = createCard(card);
    cardsContainer.append(cardElement);
  });

  placeFormElement.addEventListener("submit", createCard);

  placeFormElement.addEventListener("submit", handleNewPlaceCreation);

  editProfileFormElement.addEventListener(
    "submit",
    handleEditProfileFormSubmit
  );

  // Esc Modal

function escCloseModal(evt, modalElement) {
  if (evt.key === "Escape") {
    modalElement.classList.add("modal_invisible");
  }
}

function enableModalEsc() {
  const modalList = [...document.querySelectorAll(".modal")];
  modalList.forEach((modalElement) => {
    document.addEventListener("keydown", (evt) => {
      escCloseModal(evt, modalElement);
    });
  });
}

enableModalEsc();

  //Toggle Modal Listeners

  editButton.addEventListener("click", handleOpenProfileForm);

  addPlaceButton.addEventListener("click", handleAddButton);

  placeCloseButton.addEventListener("click", handlePlaceFormCloseButton);

  zoomedPlaceModalCloseButton.addEventListener("click", () => {
    toggleModal(zoomedPlaceModal);
  });

  editProfileCloseButton.addEventListener(
    "click",
    handleEditProfileCloseButton
  );
}

initialize();

editProfileOverlay.addEventListener("click", (evt) => {
  if (
    evt.target != editProfileModalContainer &&
    evt.target != editProfileCloseButton
  ) {
    toggleModal(editProfileModal);
  }
});


