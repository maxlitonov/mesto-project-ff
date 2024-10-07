(()=>{"use strict";const e=e=>{e.classList.add("popup_is-opened"),document.addEventListener("keydown",r)},t=e=>{e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",r)},r=e=>{const r=document.querySelectorAll(".popup");"Escape"===e.key&&r.forEach((e=>{e.classList.contains("popup_is-opened")&&t(e)}))},o=e=>{(e.target.classList.contains("popup__close")||e.target.classList.contains("popup"))&&t(e.currentTarget)},a={baseUrl:"https://nomoreparties.co/v1/wff-cohort-23",headers:{authorization:"1c20f677-0b77-4b2d-885f-f8d61e141bf8","Content-Type":"application/json"}},n=e=>e.ok?e.json():Promise.reject(`Ошибка: ${e.status}`),s=document.querySelector("#card-template").content,c=(e,{deleteCard:t,likeCard:r,openImagePopup:o},a)=>{const n=s.querySelector(".card").cloneNode(!0),c=n.querySelector(".card__title"),l=n.querySelector(".card__image"),i=n.querySelector(".card__delete-button"),u=n.querySelector(".card__like-counter");l.alt=e.name,c.textContent=e.name,l.src=e.link,n.addEventListener("click",o),n.id=e._id,e.owner._id!==a?i.classList.add("card__delete-button-hidden"):i.addEventListener("click",t);const d=e.likes.length;u.textContent=d;const p=n.querySelector(".card__like-button");return p.addEventListener("click",(()=>r(p,n))),e.likes.some((e=>e._id===a))&&p.classList.add("card__like-button_is-active"),n},l=e=>{const t=e.target.closest(".places__item");var r;(r=t.id,fetch(`${a.baseUrl}/cards/${r}`,{method:"DELETE",headers:a.headers}).then(n)).then(t.remove()).catch((e=>console.log(`Ошибка удаления карточки: ${e}`)))},i=(e,t)=>{const r=e.classList.contains("card__like-button_is-active"),o=t.id,s=t.querySelector(".card__like-counter");var c,l;(c=o,l=r,fetch(`${a.baseUrl}/cards/likes/${c}`,{method:l?"DELETE":"PUT",headers:a.headers}).then(n)).then((t=>{e.classList.toggle("card__like-button_is-active"),s.textContent=t.likes.length})).catch((e=>console.log(`Ошибка: ${e}`)))},u=(e,t,r)=>{const o=e.querySelector(`.${t.id}-error`);t.classList.remove(r.inputErrorClass),o.classList.remove(r.errorClass),o.textContent=""},d=(e,t,r)=>{(e=>e.some((e=>!e.validity.valid)))(e)?(t.disabled=!0,t.classList.add(r.inactiveButtonClass)):(t.disabled=!1,t.classList.remove(r.inactiveButtonClass))},p=(e,t)=>{const r=e.querySelector(t.submitButtonSelector),o=Array.from(e.querySelectorAll(t.inputSelector));o.forEach((r=>{u(e,r,t)})),e.reset(),d(o,r,t)},_=document.querySelector(".profile__edit-button"),m=document.querySelector(".profile__add-button"),y=document.querySelector(".popup__image"),h=document.querySelector(".popup__input_type_card-name"),v=document.querySelector(".popup__input_type_url"),b=document.querySelector(".popup__input_type_name"),S=document.querySelector(".popup__input_type_description"),f=document.querySelector(".profile__title"),q=document.querySelector(".profile__description"),g=document.querySelectorAll(".popup"),C=document.querySelector(".popup_type_edit"),L=document.querySelector(".popup_type_new-card"),E=document.querySelector(".popup_type_image"),k=document.querySelector(".places__list"),$=document.querySelector(".popup_type_edit .popup__form"),A=document.querySelector(".popup_type_new-card .popup__form"),x=document.querySelector(".popup_type_avatar"),P=document.querySelector(".popup_type_avatar .popup__form"),U=document.querySelector(".profile__image"),T=x.querySelector(".popup__input_type_url-avatar"),w={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};let B=null;Promise.all([fetch(`${a.baseUrl}/cards`,{headers:a.headers}).then(n),fetch(`${a.baseUrl}/users/me`,{headers:a.headers}).then(n)]).then((([e,t])=>{B=t._id,f.textContent=t.name,q.textContent=t.about,U.style.backgroundImage=`url(${t.avatar})`,e.forEach((e=>{k.append(c(e,{deleteCard:l,likeCard:i,openImagePopup:I},B))}))})).catch((e=>console.log(`Ошибка: ${e}`))),g.forEach((e=>{e.addEventListener("click",o)})),g.forEach((e=>{e.classList.add("popup_is-animated")}));const D=(e,t)=>{e.textContent=t},I=t=>{const r=t.target;if(r.classList.contains("card__image")){const t=r.getAttribute("src"),o=r.getAttribute("alt"),a=E.querySelector(".popup__caption");y.setAttribute("src",t),y.setAttribute("alt",o),a.textContent=y.alt,e(E)}};_.addEventListener("click",(()=>{p($,w),b.value=f.textContent,S.value=q.textContent,e(C)})),m.addEventListener("click",(()=>{p(A,w),A.reset(),e(L)})),U.addEventListener("click",(()=>{p(P,w),p(P,w),e(x)})),P.addEventListener("submit",(e=>{var r;e.preventDefault(),D(e.submitter,"Сохранение..."),(r={avatar:T.value},fetch(`${a.baseUrl}/users/me/avatar`,{method:"PATCH",headers:a.headers,body:JSON.stringify(r)}).then(n)).then((e=>{U.style=`background-image: url(${e.avatar})`})).catch((e=>console.log(`Ошибка: ${e}`))).finally((()=>D(e.submitter,"Сохранить"))),t(x)})),$.addEventListener("submit",(e=>{e.preventDefault(),D(e.submitter,"Сохранение..."),(({name:e,about:t})=>fetch(`${a.baseUrl}/users/me`,{method:"PATCH",headers:a.headers,body:JSON.stringify({name:e,about:t})}).then(n))({name:b.value,about:S.value}).then((e=>{f.textContent=e.name,q.textContent=e.about})).catch((e=>console.log(`Ошибка: ${e}`))).finally((()=>D(e.submitter,"Сохранить"))),t(C)})),A.addEventListener("submit",(e=>{e.preventDefault(),D(e.submitter,"Сохранение...");var r;(r={name:h.value,link:v.value},fetch(`${a.baseUrl}/cards`,{method:"POST",headers:a.headers,body:JSON.stringify(r,undefined)}).then(n)).then((e=>{k.prepend(c(e,{deleteCard:l,likeCard:i,openImagePopup:I},B))})).catch((e=>console.log(`Ошибка: ${e}`))).finally((()=>D(e.submitter,"Сохранить"))),A.reset(),t(L)})),(e=>{Array.from(document.querySelectorAll(e.formSelector)).forEach((t=>{((e,t)=>{const r=e.querySelector(t.submitButtonSelector),o=Array.from(e.querySelectorAll(t.inputSelector));d(o,r,t),o.forEach((a=>{a.addEventListener("input",(()=>{((e,t,r)=>{t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?u(e,t,r):((e,t,r,o)=>{const a=e.querySelector(`.${t.id}-error`);t.classList.add(o.inputErrorClass),a.textContent=r,a.classList.add(o.errorClass)})(e,t,t.validationMessage,r)})(e,a,t),d(o,r,t)}))}))})(t,e)}))})(w)})();