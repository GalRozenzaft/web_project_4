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
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  const hasInvalidListInput = (inputList) => {
    console.log("hasInvalidListInput called");
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  const toggleSubmitButtonState = (inputList, submitButtonElement) => {
    console.log("toggleSubmitButtonState called");
    if (hasInvalidListInput(inputList)) {
      submitButtonElement.classList.add("form__submit-button_inactive");
    } else {
      submitButtonElement.classList.remove("form__submit-button_inactive");
    }
  };
  
  const setInputsEventListeners = (formElement) => {
    console.log("setInputsEventListeners called");
    const inputList = Array.from(formElement.querySelectorAll(".form__input"));
    const submitButtonElement = formElement.querySelector(".form__submit-button");
    toggleSubmitButtonState(inputList, submitButtonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        isValid(formElement, inputElement);
      }); 
    });
  };
  
  const enableFormValidation = () => {
    console.log("enableFormValidation called");
    const formList = Array.from(document.querySelectorAll(".form"));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
  
      setInputsEventListeners(formElement);
  
      // const fieldSetList = Array.from(formElement.querySelectorAll(".form__fieldset"));
      // fieldSetList.forEach((fieldset) => {
      //   setInputsEventListeners(fieldset);
      // });
    });
  };
  
  enableFormValidation();