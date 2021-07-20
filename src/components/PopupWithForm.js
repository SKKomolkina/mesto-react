import React from 'react';

function PopupWithForm(props) {
    return (
        <div className={`popup popup-${props.name}`}>
            <button class={`button-close popup__cross popup__cross_btn_close-${props.name} popup__button-close`}
                type="button"></button>
            <form id="popup__form" class={`popup__form popup__form_${props.name}`} method="get" name={`${props.name}-form`} novalidate>

                <h2 class="popup__title">{props.title}</h2>

                <input id="popup__input_type_name" class="popup__input popup__input_type_name" type="text" name="name"
                    value="Жак-Ив Кусто" minLength="2" maxLength="40" required />
                <span id="popup__input_type_name-error" class="popup__error"></span>

                <input id="popup__input_type_about" class="popup__input popup__input_type_about" type="text" name="about"
                    value="Исследователь океана" minLength="2" maxLength="200" required />
                <span id="popup__input_type_about-error" class="popup__error"></span>

                <button class={`popup__button popup__save popup__save-${props.name}`} type="submit">Сохранить</button>
            </form>
        </div>
    )
}

export default PopupWithForm