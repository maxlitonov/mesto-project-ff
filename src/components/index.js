import '../style/pages/index.css';
import {initialCards} from './cards.js';

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');

const modals = document.querySelectorAll('.popup');
const placesList = document.querySelector('.places__list');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const editPopup = document.querySelector('.popup_type_edit');
const addPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');

// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: Функция создания карточки
const createCard = (element, deleteCard) => {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__image').alt = element.name;
  cardElement.querySelector('.card__title').textContent = element.name;
  deleteButton.addEventListener('click', deleteCard);
  return cardElement;
}

// @todo: Функция удаления карточки
const deleteCard = (evt) => {
  evt.target.closest('.places__item').remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (element) {
  cardList.append(createCard(element, deleteCard));
});

<<<<<<< HEAD
////////////////////// 6ПР
function openPopup (popup) {
  popup.classList.add('popup_is-opened');
  closeButton.addEventListener('click', )
}

function closePopup (popup) {
  popup.classList.remove('popup_is-opened');
}

 


editButton.addEventListener('click', () => {
  openPopup(editPopup);
  
=======
// Слушаутель закрытия на все модалки
modals.forEach((modal) => {
  modal.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('popup__close')|| evt.target.classList.contains('popup')) {
      closeModal(modal);
    }
  })
>>>>>>> d4dcfbde002f88d95441133ff4fa097bc59db41c
})

// Открытие формы
const openModal = (modal) => {
  modal.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEsc);
  
}

// Закрытие формы
const closeModal = (modal) => {
  modal.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEsc)
}

// Закрытие по ESC
const handleEsc = (evt) => {
  if(evt.key === 'Escape') {
    modals.forEach((modal) => {
      if (modal.classList.contains('popup_is-opened')) {
        closeModal(modal)
      }
    })
  }
}

// Функция сабмит формы
const handleEditProfileFormSubmit = (evt) => {
  evt.preventDefault();

  const name = nameInput.value;
  const description = jobInput.value;

  const profileTitle = document.querySelector('.profile__title')
  const profileDescription = document.querySelector('.profile__description')

  profileTitle.textContent = name;
  profileDescription.textContent = description;
}

// Слушатель открытия модалки редактирования
editButton.addEventListener('click', () => {
  openModal(editPopup);
})

// Слушатель открытия модалки добавления карточки
addButton.addEventListener('click', () => {
  openModal(addPopup);
})

// Слушатель открытия модалки изображения
placesList.addEventListener('click', (evt) => {
  openModal(imagePopup)
})

// Слушатель сабмит формы
formElement.addEventListener('submit', handleEditProfileFormSubmit);

