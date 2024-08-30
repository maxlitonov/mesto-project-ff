import '../style/pages/index.css';
import {initialCards} from './cards.js';
import {popupEditForm, popupAddForm, popupImageForm, cardList, openModal, closeModal, handleEsc, handleEditProfileFormSubmit, handleAddProfileFormSubmit, modals, openEditModal, openAddModal} from './modal.js';
import {createCard, deleteCard, likeCard, openImagePopup} from './card.js';

const placesList = document.querySelector('.places__list');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const button = document.querySelector('.button');
const popup = document.querySelector('.popup');

// @todo: Вывести карточки на страницу
initialCards.forEach(function (element) {
  cardList.append(createCard(element, deleteCard, likeCard));
});

// Слушаутель закрытия на все модалки
modals.forEach((modal) => {
  modal.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('popup__close')|| evt.target.classList.contains('popup')) {
      closeModal(modal);
    }
  })
})

// Добавление анимации
modals.forEach((modal) => {
  modal.classList.add('popup_is-animated')
})

// Слушатель открытия модалки редактирования
editButton.addEventListener('click', openEditModal)

// Слушатель открытия модалки добавления карточки
addButton.addEventListener('click', openAddModal)

// Слушатель сабмит edit формы
popupEditForm.addEventListener('submit', handleEditProfileFormSubmit);

// Слушатель сабмит add формы
popupAddForm.addEventListener('submit', handleAddProfileFormSubmit);

// Слушатель image формы
cardList.addEventListener('click', openImagePopup)