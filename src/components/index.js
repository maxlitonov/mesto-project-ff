import '../style/pages/index.css';
import {initialCards} from './cards.js';
import {openModal, closeModal, handleEsc, handleEditProfileFormSubmit, modals, openEditModal, openAddModal, openImageModal} from './modal.js';
import {createCard, deleteCard} from './card.js';

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');
const placesList = document.querySelector('.places__list');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

// @todo: Вывести карточки на страницу
initialCards.forEach(function (element) {
  cardList.append(createCard(element, deleteCard));
});

// Слушаутель закрытия на все модалки
modals.forEach((modal) => {
  modal.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('popup__close')|| evt.target.classList.contains('popup')) {
      closeModal(modal);
    }
  })
})

// Слушатель открытия модалки редактирования
editButton.addEventListener('click', openEditModal)

// Слушатель открытия модалки добавления карточки
addButton.addEventListener('click', openAddModal)

// Слушатель открытия модалки изображения
placesList.addEventListener('click', openImageModal)

// Слушатель сабмит формы
.addEventListener('submit', handleEditProfileFormSubmit);

