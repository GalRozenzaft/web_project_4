function showInputError(inputElement) {
  const error = inputElement.validationMessage;
  inputElement.classList.add("form__input_type_error");
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

function isInputVlaid(inputElement) {
  if (inputElement.validity.valid) {
    hideInputError(inputElement);
  } else {
    showInputError(inputElement);
  }
}

function toggleSubmitButtonState(inputList, submitButton) {
  const isFormValid = inputList.every(
    (inputElement) => inputElement.validity.valid
  );

  if (isFormValid) {
    submitButton.disabled = false;
    submitButton.classList.remove("form__submit-button_inactive");
  } else {
    submitButton.disabled = "disabled";
    submitButton.classList.add("form__submit-button_inactive");
  }
}

function enableFormValidation(settings) {
  const { formSelector, inputSelector, submitButtonSelector, ...rest } =
    settings;
  const formList = [...document.querySelectorAll(formSelector)];
  formList.forEach((form) => {
    form.addEventListener("submit", (evt) => evt.preventDefault());

    const inputList = [...form.querySelectorAll(inputSelector)];
    const submitButton = form.querySelector(submitButtonSelector);
    toggleSubmitButtonState(inputList, submitButton);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        isInputVlaid(inputElement);
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
