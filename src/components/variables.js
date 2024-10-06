const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const imageImagePopup = document.querySelector(".popup__image");
const cardName = document.querySelector(".popup__input_type_card-name");
const cardLink = document.querySelector(".popup__input_type_url");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const modals = document.querySelectorAll(".popup");
const editPopup = document.querySelector(".popup_type_edit");
const addPopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");
const cardList = document.querySelector(".places__list");
const popupEditForm = document.querySelector(".popup_type_edit .popup__form");
const popupAddForm = document.querySelector(".popup_type_new-card .popup__form");

const popupAvatar = document.querySelector('.popup_type_avatar');
const popupAvatarForm = document.querySelector(".popup_type_avatar .popup__form");
const avatar = document.querySelector('.profile__image');

export{
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
  popupAvatar,
  popupAvatarForm,
  avatar
}