import { createCard, deleteCard, likeCard } from "./card.js";

const modals = document.querySelectorAll(".popup");
const editPopup = document.querySelector(".popup_type_edit");
const addPopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");

const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const cardList = document.querySelector(".places__list");
const cardName = document.querySelector(".popup__input_type_card-name");
const cardLink = document.querySelector(".popup__input_type_url");

const popupEditForm = document.querySelector(".popup_type_edit .popup__form");
const popupAddForm = document.querySelector(".popup_type_new-card .popup__form");

// Открытие формы
const openModal = (modal) => {
  modal.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEsc);
};

// Закрытие формы
const closeModal = (modal) => {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEsc);
};

// Закрытие по ESC
const handleEsc = (evt) => {
  if (evt.key === "Escape") {
    modals.forEach((modal) => {
      if (modal.classList.contains("popup_is-opened")) {
        closeModal(modal);
      }
    });
  }
};

// Функция открытия edit модалки
const openEditModal = (evt) => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(editPopup);
};

// Функция сабмит edit формы
const handleEditProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(editPopup);
};

// Функция открытия add модалки
const openAddModal = (evt) => {
  openModal(addPopup);
};

// Функция сабмит add формы
const handleAddProfileFormSubmit = (evt) => {
  evt.preventDefault();
  const newCard = {
    link: cardLink.value,
    name: cardName.value,
  };
  cardList.prepend(createCard(newCard, deleteCard, likeCard));
  popupAddForm.reset();
  closeModal(addPopup);
};

export {
  openModal,
  closeModal,
  handleEsc,
  handleEditProfileFormSubmit,
  handleAddProfileFormSubmit,
  modals,
  editPopup,
  addPopup,
  imagePopup,
  cardList,
  popupEditForm,
  popupAddForm,
};
export { openEditModal, openAddModal };
