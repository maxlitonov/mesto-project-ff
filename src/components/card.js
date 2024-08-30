import { openModal, imagePopup } from "./modal";

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: Функция создания карточки
const createCard = (element, deleteCard, likeCard) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  cardElement.querySelector(".card__image").src = element.link;
  cardElement.querySelector(".card__image").alt = element.name;
  cardElement.querySelector(".card__title").textContent = element.name;
  deleteButton.addEventListener("click", deleteCard);
  cardElement.addEventListener("click", likeCard);

  return cardElement;
};

// @todo: Функция удаления карточки
const deleteCard = (evt) => {
  evt.target.closest(".places__item").remove();
};

// Функция like карточки
const likeCard = (evt) => {
  if (evt.target.classList.contains("card__like-button")) {
    evt.target.classList.toggle("card__like-button_is-active");
  }
};

export { createCard, deleteCard, likeCard };
