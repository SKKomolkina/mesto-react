import React from 'react';
import PopupWithForm from './PopupWithForm';

function ProfilePopup(props) {
    const { isOpen, onClose } = props;

    return (
        <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        buttonText='Сохранить'

        isOpen={isOpen}
        onClose={onClose}
        >
            <input id="popup__input_type_name" className="popup__input popup__input_type_name" 
            type="text" name="name" value="Жак-Ив Кусто" minLength="2" maxLength="40" required 
            />
            <span id="popup__input_type_name-error" className="popup__error"></span>

            <input id="popup__input_type_about" className="popup__input popup__input_type_about" 
            type="text" name="about" value="Исследователь океана" minLength="2" maxLength="200" required 
            />
            <span id="popup__input_type_about-error" className="popup__error"></span>

        </PopupWithForm>
    )
}

export default ProfilePopup;