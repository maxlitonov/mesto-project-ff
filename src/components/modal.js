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
  const modals = document.querySelectorAll(".popup");
  if (evt.key === "Escape") {
    modals.forEach((modal) => {
      if (modal.classList.contains("popup_is-opened")) {
        closeModal(modal);
      }
    });
  }
};

// Функция закрытия click по overlay
const closePopupByOverlay = (evt) => {
  if(evt.target.classList.contains('popup__close')|| evt.target.classList.contains('popup')) { 
     closeModal(evt.currentTarget); 
   }
}

export {
  openModal,
  closeModal,
  closePopupByOverlay
};

