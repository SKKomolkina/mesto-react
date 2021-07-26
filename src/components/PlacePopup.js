import React from 'react';
import PopupWithForm from './PopupWithForm';

function PlacePopup(props) {
    const { isOpen, onClose } = props;
    return (
        <PopupWithForm                
        name='photo'
        title='Новое место'
        buttonText='Создать'

        isOpen={isOpen}
        onClose={onClose}
        >

            <input id="popup__input_type_title" class="popup__input popup__input_type_title" type="text" name="name"
                value="" placeholder="Название" minlength="1" maxlength="30" required />
            <span id="popup__input_type_title-error" class="popup__error"></span>

            <input id="popup__input_type_image" class="popup__input popup__input_type_image" type="url" name="link"
                value="" placeholder="Ссылка на картинку" required />
            <span id="popup__input_type_image-error" class="popup__error"></span>

        </PopupWithForm>
    )
}

export default PlacePopup;