import { openModal, imagePopup, openImageModal } from "./modal";

// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: Функция создания карточки
const createCard = (element, deleteCard, likeCard, openImageModal) => {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__image').alt = element.name;
  cardElement.querySelector('.card__title').textContent = element.name;
  deleteButton.addEventListener('click', deleteCard);
  cardElement.addEventListener('click', likeCard)
  cardElement.addEventListener('click', openImageModal)
  return cardElement;
}

// @todo: Функция удаления карточки
const deleteCard = (evt) => {
  evt.target.closest('.places__item').remove();
}

// Функция like карточки
const likeCard = (evt) => {
  evt.target.classList.toggle('card__like-button_is-active')
}

// Функция открытия картинки карточки
const image = (evt) => {
  const image = {
    src: evt.src.value,
    alt: evt.alt.value
  }
  return image;
}

export {createCard, deleteCard, likeCard, openImageModal, image};