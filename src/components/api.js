const config = {
  baseUrl: "https://nomoreparties.co/v1/cohort-42",
  headers: {
    authorization: "1c20f677-0b77-4b2d-885f-f8d61e141bf8",
    "Content-Type": "application/json"
  }
}

const getResponseData = (res) => {
  return res.ok? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

const getCardList = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  }).then(getResponseData);
}

const addCard = ({name, card}) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name,
      link
    }),
  }).then(getResponseData)
}

const removeCard = (cardID) => {
  
}

const getUserInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  }).then(getResponseData);
}

const setUserinfo = ({name, about}) => {
  
}

const setUserAvatar = ({avatar}) => {
  
}

const changeLikeCardStatus = (cardID, like) => {
  
}

export {
  getCardList,
  addCard,
  removeCard,
  getUserInfo,
  setUserinfo,
  setUserAvatar,
  changeLikeCardStatus
}