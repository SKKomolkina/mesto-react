import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';

function App() {
  return (
<body className="root">
    <Header />
    <Main />
    <Footer />


{/* POPUP_PROFILE */}
<div class="popup popup-profile">
    <button class="button-close popup__cross popup__cross_btn_close-profile popup__button-close"
        type="button"></button>
    <form id="popup__form" class="popup__form popup__form_profile" method="get" name="edit-form" novalidate>

        <h2 class="popup__title">Редактировать профиль</h2>

        <input id="popup__input_type_name" class="popup__input popup__input_type_name" type="text" name="name"
            value="Жак-Ив Кусто" minLength="2" maxLength="40" required />
        <span id="popup__input_type_name-error" class="popup__error"></span>

        <input id="popup__input_type_about" class="popup__input popup__input_type_about" type="text" name="about"
            value="Исследователь океана" minLength="2" maxLength="200" required />
        <span id="popup__input_type_about-error" class="popup__error"></span>

        <button class="popup__button popup__save popup__save-profile" type="submit">Сохранить</button>
    </form>
</div>

{/* POPUP_photo */}
<div class="popup popup-photo">
    <button class="button-close popup__cross popup__cross_btn_close-photo popup__button-close"
        type="button"></button>
    <form id="popup__form popup__form-photo" class="popup__form popup__form_photo" name="image-form" novalidate>

        <h2 class="popup__title">Новое место</h2>

        <input id="popup__input_type_title" class="popup__input popup__input_type_title" type="text" name="name"
            value="" placeholder="Название" minlength="1" maxlength="30" required />
        <span id="popup__input_type_title-error" class="popup__error"></span>

        <input id="popup__input_type_image" class="popup__input popup__input_type_image" type="url" name="link"
            value="" placeholder="Ссылка на картинку" required />
        <span id="popup__input_type_image-error" class="popup__error"></span>

        <button class="popup__button popup__save popup__save-photo" type="submit">Создать</button>
    </form>
</div>

<ImagePopup />

{/* POPUP_DELETE-CARD */}
    <div class="popup popup-delete">
        <button class="button-close popup__cross popup__cross_btn_close-photo popup__button-close"
            type="button"></button>
        <form class="popup__form popup__form_delete">
            <h2 class="popup__title popup__title-delete">Вы уверены?</h2>
            <button class="popup__button popup__save popup__save-delete" type="submit">Да</button>
        </form>
    </div>

    <div class="popup popup-avatar">
        <button class="button-close popup__cross popup__cross_btn_close-photo popup__button-close" type="button"></button>
        <form class="popup__form popup__form_avatar">
            <h2 class="popup__title">Обновить аватар</h2>

            <input id="popup__input_type_avatar" class="popup__input popup__input_type_avatar" name="link"
            value="" placeholder="Ссылка на картинку" type="url" required />
            <span id="popup__input_type_avatar-error" class="popup__error"></span>

            <button class="popup__button popup__save" type="submit">Сохранить</button>
        </form>
    </div>

{/* PHOTO_TEMPLATE */}
<template id="photo-template">
    <article class="photo">
        <div class="photo__image-container">
            <button class="photo__trash" aria-label="Удалить" type="button"></button>
            <img class="photo__image photo__image_open" src="#" alt="#" name="name" />
        </div>
        <h3 class="photo__title" name="link">1</h3>
        <div class="photo__like-container">
            <button class="photo__like" type="button" aria-label="Нравится"></button>
            <p class="photo__like-counter"></p>
        </div>
    </article>
</template>

</body>
  );
}

export default App;
