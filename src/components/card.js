import { removeCard, changeLikeCardStatus } from "./api.js";

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: Функция создания карточки
const createCard = (
  element,
  { deleteCard, likeCard, openImagePopup },
  userId
) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const counterLike = cardElement.querySelector(".card__like-counter");
  cardImage.alt = element.name;
  cardTitle.textContent = element.name;
  cardImage.src = element.link;
  deleteButton.addEventListener("click", deleteCard);
  cardElement.addEventListener("click", openImagePopup);
  cardElement.id = element._id;

  if (element.owner._id !== userId) {
    deleteButton.classList.add("card__delete-button-hidden");
  }

  const likeCount = element.likes.length || 0;
  counterLike.textContent = likeCount;

  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => likeCard(likeButton, cardElement));

  const isLiked = element.likes.some((like) => like._id === userId);
  if (isLiked) {
    likeButton.classList.add("card__like-button_is-active");
  }

  return cardElement;
};

// @todo: Функция удаления карточки
const deleteCard = (evt) => {
  const deletedCard = evt.target.closest(".places__item");
  removeCard(deletedCard.id)
    .then(deletedCard.remove())
    .catch((err) => console.log(`Ошибка удаления карточки: ${err}`));
};

// Функция like карточки
const likeCard = (likeButton, card) => {
  const isMyLikeOnCard = likeButton.classList.contains(
    "card__like-button_is-active"
  );
  const cardId = card.id;
  const likeCounter = card.querySelector(".card__like-counter");

  if (!isMyLikeOnCard) {
    changeLikeCardStatus(cardId, false)
      .then((res) => {
        likeButton.classList.add("card__like-button_is-active");
        const likeCount = res.likes.length || 0;
        likeCounter.textContent = likeCount;
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  } else if (isMyLikeOnCard) {
    changeLikeCardStatus(cardId, true)
      .then((result) => {
        likeButton.classList.remove("card__like-button_is-active");
        const likeCount = result.likes.length || 0;
        likeCounter.textContent = likeCount;
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }
};

export { createCard, deleteCard, likeCard };
