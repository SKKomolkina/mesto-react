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

            <input id="popup__input_type_title" className="popup__input popup__input_type_title" type="text" name="name"
                placeholder="Название" minLength="1" maxLength="30" required />
            <span id="popup__input_type_title-error" className="popup__error"></span>

            <input id="popup__input_type_image" className="popup__input popup__input_type_image" type="url" name="link"
                placeholder="Ссылка на картинку" required />
            <span id="popup__input_type_image-error" className="popup__error"></span>

        </PopupWithForm>
    )
}

export default PlacePopup;