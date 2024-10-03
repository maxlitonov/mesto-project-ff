import "../style/pages/index.css";
import { initialCards } from "./cards.js";
import { openModal, closeModal, closePopupByOverlay } from "./modal.js";
import { createCard, deleteCard, likeCard } from "./card.js";
// import {showInputError, hideInputError} from "./validation.js"

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const imageImagePopup = document.querySelector(".popup__image");
const cardName = document.querySelector(".popup__input_type_card-name");
const cardLink = document.querySelector(".popup__input_type_url");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const modals = document.querySelectorAll(".popup");
const editPopup = document.querySelector(".popup_type_edit");
const addPopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");
const cardList = document.querySelector(".places__list");
const popupEditForm = document.querySelector(".popup_type_edit .popup__form");
const popupAddForm = document.querySelector(".popup_type_new-card .popup__form");

// Функция открытия image модалки
const openImagePopup = (evt) => {
  const card = evt.target;
  if (card.classList.contains("card__image")) {
    const imageSrc = card.getAttribute("src");
    const imageAlt = card.getAttribute("alt");
    const popupCaption = imagePopup.querySelector(".popup__caption");
    imageImagePopup.setAttribute("src", imageSrc);
    imageImagePopup.setAttribute("alt", imageAlt);
    popupCaption.textContent = imageImagePopup.alt;
    openModal(imagePopup);
  }
};

// Вывести карточки на страницу
initialCards.forEach(function (element) {
  cardList.append(createCard(element, deleteCard, likeCard, openImagePopup));
});

// Слушаутель закрытия на все модалки
modals.forEach((modal) => {
  modal.addEventListener("click", closePopupByOverlay);
});

// Добавление анимации
modals.forEach((modal) => {
  modal.classList.add("popup_is-animated");
});

// Функция открытия edit модалки
const openEditModal = (evt) => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(editPopup);
};

// Функция сабмит edit формы
const handleEditProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(editPopup);
};

// Функция открытия add модалки
const openAddModal = (evt) => {
  openModal(addPopup);
};

// Функция сабмит add формы
const handleAddProfileFormSubmit = (evt) => {
  evt.preventDefault();
  const newCard = {
    link: cardLink.value,
    name: cardName.value,
  };
  cardList.prepend(createCard(newCard, deleteCard, likeCard, openImagePopup));
  popupAddForm.reset();
  closeModal(addPopup);
};

// Слушатель открытия модалки редактирования
editButton.addEventListener("click", openEditModal);

// Слушатель открытия модалки добавления карточки
addButton.addEventListener("click", openAddModal);

// Слушатель сабмит edit формы
popupEditForm.addEventListener("submit", handleEditProfileFormSubmit);

// Слушатель сабмит add формы
popupAddForm.addEventListener("submit", handleAddProfileFormSubmit);

/////////////////////////////// 7 Sprint /////////////////////////////////////////


// Функция, которая добавляет класс с ошибкой
const showInputError = (popupForm, popupInput, errorMessage) => {
  const popupError = popupForm.querySelector(`.${popupInput.id}-error`);
  popupInput.classList.add('popup__input_type_error');
  popupError.textContent = errorMessage;
  popupError.classList.add('popup__input-error_active')
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (popupForm, popupInput) => {
  const popupError = popupForm.querySelector(`.${popupInput.id}-error`);
  popupInput.classList.remove('popup__input_type_error');
  popupError.classList.remove('popup__input-error_active')
  popupError.textContent = '';
};

// Функция, которая проверяет valid Для button
const hasInvalidInput = (inputList) => {
  return inputList.some((popupInput) => {
    return !popupInput.validity.valid;
  })
}

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add('popup__button_inactive');
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove('popup__button_inactive');
  }
}; 

// Функция, которая проверяет валидность поля
const checkInputValidity = (popupForm, popupInput) => {
  if (popupInput.validity.patternMismatch) {
    popupInput.setCustomValidity(popupInput.dataset.errorMessage);
  } else {
    popupInput.setCustomValidity("");
  }

  if (!popupInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(popupForm, popupInput, popupInput.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(popupForm, popupInput);
  }
};

// Функция, которая вешает слушатель validation на все input в форме
const setEventListeners = (popupForm) => {
  const buttonElement = popupForm.querySelector('.popup__button');
  const inputList = Array.from(popupForm.querySelectorAll('.popup__input'))
  inputList.forEach((popupInput) => {
    popupInput.addEventListener('click', () => {
      checkInputValidity(popupForm, popupInput)
      toggleButtonState(inputList, buttonElement)
    })
  })
}

// Функция, которая проходит по формам и юзает setEventListeners на них
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'))
  formList.forEach((popupForm) => {
    setEventListeners(popupForm)
  })
}

enableValidation();



