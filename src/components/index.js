// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close');

const editPopup = document.querySelector('.popup_type_edit');
const addPopup = document.querySelector('.popup_type_new-card');


// @todo: Функция создания карточки
function createCard(element, deleteCard) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__image').alt = element.name;
  cardElement.querySelector('.card__title').textContent = element.name;
  deleteButton.addEventListener('click', deleteCard);
  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(evt) {
  evt.target.closest('.places__item').remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (element) {
  cardList.append(createCard(element, deleteCard));
});

////////////////////// 6ПР
function openPopup (popup) {
  popup.classList.add('popup_is-opened');
  closeButton.addEventListener('click', )
}

function closePopup (popup) {
  popup.classList.remove('popup_is-opened');
}

// function closeEsc (evt, popup) {
//   if(evt.key.toLowerCase() === 'esc') {
//     closePopup(popup);
//   }
// }


editButton.addEventListener('click', () => {
  openPopup(editPopup);
  
})



addButton.addEventListener('click', () => {
  openPopup(addPopup);
  
})