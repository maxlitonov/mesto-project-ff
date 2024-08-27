import {createCard, deleteCard} from './card.js'

const modals = document.querySelectorAll('.popup');
const editPopup = document.querySelector('.popup_type_edit');
const addPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');


const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')

const cardName = document.querySelector('.popup__input_type_card-name')
const cardLink = document.querySelector('.popup__input_type_url')

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

// Функция сабмит edit формы
const handleEditProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(editPopup);
}

// Функция сабмит edit формы
const handleAddProfileFormSubmit = (evt) => {
  evt.preventDefault();
  const newCard = {
    link: cardLink.value,
    name: cardName.value
  }
  cardList.append(createCard(newCard, deleteCard));
}

// Функция открытия edit модалки
const openEditModal = (evt) => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(editPopup);
}

// Функция открытия add модалки
const openAddModal = (evt) => {
  openModal(addPopup);
}

// Функция открытия image модалки
const openImageModal = (evt) => {
  openModal(imagePopup);
}

export {openModal, closeModal, handleEsc, handleEditProfileFormSubmit, handleAddProfileFormSubmit};
export {openEditModal, openAddModal, openImageModal}
export {modals, editPopup, addPopup, imagePopup};