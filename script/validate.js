function showInputError(inputElement, validationConfig) {
  const error = inputElement.validationMessage;
  // const { inputErrorClass, errorClass } = validationConfig;
  inputElement.classList.add("form__input_type_error");
  // inputElement.classList.add(validationConfig.inputErrorClass);
  const errorElement = document.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.add("form__input-error-message_active");
  errorElement.textContent = error;
}
function hideInputError(inputElement) {
  inputElement.classList.remove("form__input_type_error");
  const errorElement = document.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.remove("form__input-error-message_active");
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

  function toggleSubmitButtonState(inputList, submitButton, validationConfig) {
    isFormValid = checkFormValidity(inputList);
    if (isFormValid) {
          submitButton.disabled = false;
          submitButton.classList.remove("form__submit-button_inactive");
          // submitButton.classList.remove(validationConfig.inactiveButtonClass);
          // submitButton.classList.remove(inactiveButtonClass);

        } else {
          submitButton.disabled = true;
          submitButton.classList.add("form__submit-button_inactive");
        }
  }

function enableFormValidation(validationConfig) {
  const { formSelector, inputSelector, submitButtonSelector } = validationConfig;
  const formList = [...document.querySelectorAll(validationConfig.formSelector)];
  formList.forEach((form) => {
    form.addEventListener("submit", (evt) => evt.preventDefault());

    const inputList = [...form.querySelectorAll(validationConfig.inputSelector)];
    const submitButton = form.querySelector(validationConfig.submitButtonSelector);
    toggleSubmitButtonState(inputList, submitButton);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        isInputValid(inputElement);
        toggleSubmitButtonState(inputList, submitButton);
      });
    });
  });
}

const config = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: ".form__submit-button_inactive",
  inputErrorClass: ".form__input_type_error",
  errorClass: ".form__input-error-message_active",
};

enableFormValidation(config);
// showInputError(config);
