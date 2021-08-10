import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
// import { api } from '../utils/Api';

import PopupWithForm from './PopupWithForm';

function ProfilePopup(props) {
    const { isOpen, onClose, onUpdateUser } = props;

    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleChangeName(evt) {
        setName(evt.target.value);
    }

    function handleChangeDescription(evt) {
        setDescription(evt.target.value);
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser])

    function handleSubmit(evt) {
        evt.preventDefault();

        onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            name='profile'
            title='Редактировать профиль'
            buttonText='Сохранить'

            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input
                onChange={handleChangeName}
                id="popup__input_type_name" 
                className="popup__input popup__input_type_name"
                type="text" 
                name="name" 
                minLength="2" 
                maxLength="40" 
                placeholder="Имя"
                value={name || ''}
                required
            />
            <span id="popup__input_type_name-error" className="popup__error"></span>

            <input
                onChange={handleChangeDescription}
                id="popup__input_type_about" 
                className="popup__input popup__input_type_about"
                type="text" 
                name="about" 
                minLength="2" 
                maxLength="200" 
                placeholder="О себе"
                value={description || ''}
                required
            />
            <span id="popup__input_type_about-error" className="popup__error"></span>

        </PopupWithForm>
    )
}

export default ProfilePopup;