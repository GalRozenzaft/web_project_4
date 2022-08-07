const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: ".form__submit-button_inactive",
  inputErrorClass: ".form__input_type_error",
  errorClass: ".form__input-error-message_active",
};

function showInputError(inputElement) {
  const error = inputElement.validationMessage;
  inputElement.classList.add(validationConfig.inputErrorClass);
  const errorElement = document.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.add(validationConfig.errorClass);
  errorElement.textContent = error;
}
function hideInputError(inputElement) {
  inputElement.classList.remove(validationConfig.inputErrorClass);
  const errorElement = document.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.remove(validationConfig.errorClass);
  errorElement.textContent = "";
}

function isInputValid(inputElement) {
  if (inputElement.validity.valid) {
    hideInputError(inputElement);
  } else {
    showInputError(inputElement);
  }
}

const checkFormValidity = (inputList) =>
  inputList.every((inputElement) => inputElement.validity.valid);

function toggleSubmitButtonState(inputList, submitButton) {
  isFormValid = checkFormValidity(inputList);
  if (isFormValid) {
    submitButton.disabled = false;
    submitButton.classList.remove("form__submit-button_inactive");
    submitButton.classList.remove(validationConfig.inactiveButtonClass);
  } else {
    disabledButton(submitButton);
  }
}

function disabledButton(submitButton) {
  submitButton.disabled = true;
  submitButton.classList.add("form__submit-button_inactive");
  submitButton.classList.add(validationConfig.inactiveButtonClass);
}

function enableFormValidation() {
  const formList = [
    ...document.querySelectorAll(validationConfig.formSelector),
  ];
  formList.forEach((form) => {
    form.addEventListener("submit", (evt) => evt.preventDefault());

    const inputList = [
      ...form.querySelectorAll(validationConfig.inputSelector),
    ];
    const submitButton = form.querySelector(
      validationConfig.submitButtonSelector
    );
    toggleSubmitButtonState(inputList, submitButton);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        isInputValid(inputElement);
        toggleSubmitButtonState(inputList, submitButton);
      });
    });
  });
}



enableFormValidation();
