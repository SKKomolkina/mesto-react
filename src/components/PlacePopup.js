import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function PlacePopup(props) {
    const { isOpen, onClose, onAddPlace } = props;

    const currentUser = React.useContext(CurrentUserContext);
    
    const [title, setTitle] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleChangeTitle(evt) {
        setTitle(evt.target.value);
    }

    function handleChangeLink(evt) {
        setLink(evt.target.value);
    }

    React.useEffect(() => {
        setTitle(currentUser.title);
        setLink(currentUser.link);
    }, [currentUser]);

    function handleSubmit(evt) {
        evt.preventDefault();

        onAddPlace({
            name: title,
            link,
        });
    }

    return (
        <PopupWithForm
            name='photo'
            title='Новое место'
            buttonText='Создать'

            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >

            <input
                onChange={handleChangeTitle}
                value={title || ''}

                id="popup__input_type_title"
                className="popup__input popup__input_type_title" type="text" name="name"
                placeholder="Название"
                minLength="1"
                maxLength="30"
                required
            />
            <span id="popup__input_type_title-error" className="popup__error"></span>

            <input
                onChange={handleChangeLink}
                value={link || ''}
                
                id="popup__input_type_image"
                className="popup__input popup__input_type_image"
                type="url" name="link"
                placeholder="Ссылка на картинку"
                required
            />
            <span id="popup__input_type_image-error" className="popup__error"></span>

        </PopupWithForm>
    )
}

export default PlacePopup;