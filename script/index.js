//Toggling Modals

function toggleModal(event) {
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
const editFormElement = editProfileModal.querySelector(
  ".form_edit-profile-modal-container"
);

function fillProfileForm(event) {
  nameInput.value = profileName.textContent;
  profileAboutMeInput.value = profileAboutMe.textContent;
}

function handleEditProfileCloseButton(event) {
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

//
//
//
//
//
//
//
//
//
//
//
//
//
// Form Validation

const formElement = document.querySelector(".form");
const formInput = formElement.querySelector(".form__input");
// const formError = formElement.querySelector(`.${formInput.id}-error`);

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error-message_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error-message_active");
  errorElement.textContent = "";
};

const isValid = (formElement, inputElement) => {
  if (!formInput.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// formElement.addEventListener("submit", function (evt) {
//   evt.preventDefault();
// });

// formInput.addEventListener("input", isValid);

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation();

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};



//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

  zoomedPlaceModalCloseButton.addEventListener("click", () => {
    toggleModal(zoomedPlaceModal);
  });

  editButton.addEventListener("click", handleOpenProfileForm);

  editProfileCloseButton.addEventListener(
    "click",
    handleEditProfileCloseButton
  );

  editFormElement.addEventListener("submit", handleEditProfileFormSubmit);

  addPlaceButton.addEventListener("click", handleAddButton);
  placeCloseButton.addEventListener("click", handlePlaceFormCloseButton);
}

placeFormElement.addEventListener("submit", handleNewPlaceCreation);

initialize();
