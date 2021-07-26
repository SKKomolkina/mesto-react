import React from 'react';
import PopupWithForm from './PopupWithForm';

function AvatarPopup(props) {
    const { name, isOpen, onClose } = props;

    return (
        <PopupWithForm
            name='avatar'
            title='Обновить аватар'
            buttonText='Сохранить'

            isOpen={isOpen}
            onClose={onClose}
            >

            <input id={`"popup__input_type_${name}"`} className="popup__input popup__input_type_avatar" name="link"
                placeholder="Ссылка на картинку" type="url" required />
            <span id={`"popup__input_type_${name}-error"`} className="popup__error"></span>

        </PopupWithForm>
    )
}

export default AvatarPopup;