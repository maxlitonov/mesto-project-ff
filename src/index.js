import "./style/pages/index.css";
import { openModal, closeModal, closePopupByOverlay } from "./components/modal.js";
import { createCard, deleteCard, likeCard } from "./components/card.js";
import {
  validationConfig,
  enableValidation,
  clearValidation,
} from "./components/validation.js";
import {
  editButton,
  addButton,
  imageImagePopup,
  cardName,
  cardLink,
  nameInput,
  jobInput,
  profileTitle,
  profileDescription,
  modals,
  editPopup,
  addPopup,
  imagePopup,
  cardList,
  popupEditForm,
  popupAddForm,
  avatarPopup,
  popupAvatarForm,
  profileAvatar,
  inputAvatar,
} from "./components/variables.js";
import {
  addCard,
  getCardList,
  getUserInfo,
  setUserAvatar,
  setUserinfo,
} from "./components/api.js";

let userId = null;

Promise.all([getCardList(), getUserInfo()])
  .then(([cards, userInfo]) => {
    userId = userInfo._id;
    profileTitle.textContent = userInfo.name;
    profileDescription.textContent = userInfo.about;
    profileAvatar.style.backgroundImage = `url(${userInfo.avatar})`;
    // Вывести карточки на страницу
    cards.forEach((element) => {
      cardList.append(
        createCard(element, { deleteCard, likeCard, openImagePopup }, userId)
      );
    });
  })
  .catch((err) => console.log(`Ошибка: ${err}`));

// Слушаутель закрытия на все модалки
modals.forEach((modal) => {
  modal.addEventListener("click", closePopupByOverlay);
});

// Добавление анимации
modals.forEach((modal) => {
  modal.classList.add("popup_is-animated");
});

// Render
const renderLoading = (saveButton, status) => {
  saveButton.textContent = status;
};

// @todo Open image popup
const openImagePopup = (evt) => {
  const card = evt.target;
  if (card.classList.contains("card__image")) {
    const imageSrc = card.getAttribute("src");
    const imageAlt = card.getAttribute("alt");
    const popupCaption = imagePopup.querySelector(".popup__caption");
    imageImagePopup.setAttribute("src", imageSrc);
    imageImagePopup.setAttribute("alt", imageAlt);
    popupCaption.textContent = imageImagePopup.alt;
    openModal(imagePopup);
  }
};

// @todo Open edit popup
const openEditModal = () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(editPopup);
};

// @todo Submit edit form
const handleEditProfileFormSubmit = (evt) => {
  evt.preventDefault();
  renderLoading(evt.submitter, "Сохранение...");
  setUserinfo({ name: nameInput.value, about: jobInput.value })
    .then((data) => {
      profileTitle.textContent = data.name;
      profileDescription.textContent = data.about;
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => renderLoading(evt.submitter, "Сохранить"));
  closeModal(editPopup);
};

// @todo Open add popup
const openAddModal = () => {
  popupAddForm.reset();
  openModal(addPopup);
};

// @todo Submit add form
const handleAddProfileFormSubmit = (evt) => {
  evt.preventDefault();
  renderLoading(evt.submitter, "Сохранение...");
  const card = {
    name: cardName.value,
    link: cardLink.value,
  };
  addCard(card)
    .then((card) => {
      cardList.prepend(
        createCard(card, { deleteCard, likeCard, openImagePopup }, userId)
      );
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => renderLoading(evt.submitter, "Сохранить"));
  popupAddForm.reset();
  closeModal(addPopup);
};

// Функция открытия avatar модалки
const openAvatarModal = () => {
  clearValidation(popupAvatarForm, validationConfig);
  openModal(avatarPopup);
};

// @todo Submit avatar form
const handleEditAvatarFormSubmit = (evt) => {
  evt.preventDefault();
  renderLoading(evt.submitter, "Сохранение...");
  setUserAvatar({ avatar: inputAvatar.value })
    .then((data) => {
      profileAvatar.style = `background-image: url(${data.avatar})`;
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => renderLoading(evt.submitter, "Сохранить"));
  closeModal(avatarPopup);
};

// Слушатель открытия модалки редактирования
editButton.addEventListener("click", () => {
  clearValidation(popupEditForm, validationConfig);
  openEditModal();
});

// Слушатель открытия модалки добавления карточки
addButton.addEventListener("click", () => {
  clearValidation(popupAddForm, validationConfig);
  openAddModal();
});

// Слушатель открытия модалки avatar
profileAvatar.addEventListener("click", () => {
  clearValidation(popupAvatarForm, validationConfig);
  openAvatarModal();
});

// Слушатель сабмит avatar формы
popupAvatarForm.addEventListener("submit", handleEditAvatarFormSubmit);

// Слушатель сабмит edit формы
popupEditForm.addEventListener("submit", handleEditProfileFormSubmit);

// Слушатель сабмит add формы
popupAddForm.addEventListener("submit", handleAddProfileFormSubmit);

// Включение validation
enableValidation(validationConfig);
