// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');

const modals = document.querySelectorAll('.popup');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
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

////////////////////// ПР6

const openModal = (modal) => {
  modal.classList.add('popup_is-opened');
  modal.addEventListener('keydown', handleEsc);
}

const closeModal = (modal) => {
  modal.classList.remove('popup_is-opened');
  modal.removeEventListener('keydown', handleEsc)
}

const handleEsc = (evt) => {
  if(evt.key === 'Escape') {
    closeModal(evt.currentTarget);
  }
}

modals.forEach((modal) => {
  modal.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('popup__close')|| evt.target.classList.contains('popup')) {
      closeModal(modal);
    }
  })
})

editButton.addEventListener('click', () => {
  openModal(editPopup);
})

addButton.addEventListener('click', () => {
  openModal(addPopup);
})


