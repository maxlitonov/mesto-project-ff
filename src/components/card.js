import { openModal, imagePopup } from "./modal";

// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const imageImagePopup = document.querySelector('.popup__image')  
// @todo: Функция создания карточки
const createCard = (element, deleteCard, likeCard) => {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__image').alt = element.name;
  cardElement.querySelector('.card__title').textContent = element.name;
  deleteButton.addEventListener('click', deleteCard);
  cardElement.addEventListener('click', likeCard)
  
  return cardElement;
}

// @todo: Функция удаления карточки
const deleteCard = (evt) => {
  evt.target.closest('.places__item').remove();
}

// Функция like карточки
const likeCard = (evt) => {
  if(evt.target.classList.contains('card__like-button')){
    evt.target.classList.toggle('card__like-button_is-active')
  }
}

const openImagePopup = (evt) => {
  const card = evt.target;
  if(card.classList.contains('card__image')) {
    const imageSrc = card.getAttribute('src')
    const imageAlt = card.getAttribute('alt')
    const popupCaption = imagePopup.querySelector('.popup__caption')
    imageImagePopup.setAttribute('src', imageSrc)
    imageImagePopup.setAttribute('alt', imageAlt)
    popupCaption.textContent = imageImagePopup.alt;
    openModal(imagePopup)
  }  
}

export {createCard, deleteCard, likeCard, openImagePopup};