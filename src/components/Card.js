import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
    const { card, onCardClick, onCardLike, onCardDelete } = props;
    
    const user = React.useContext(CurrentUserContext);

    //сверяем айди карточки 
    const isOwn = card.owner._id === user._id;

    //класс, позволяющий при совпадении _.id удалить карточку
    const cardDeleteButtonClassName = (
        `photo__trash ${isOwn ? 'photo__trash_active' : 'photo__trash_hidden' }`
    );

    //айди карточки 
    const isLiked = card.likes.some(i => i._id === user._id);

    //класс,позволяющий лайкнуть карточку
    const cardLikeButtonClassName = (`photo__like ${isLiked ? 'photo__like_active' : ''}`);

    function handleClick() {
        onCardClick(card);
        console.log(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }

        return (
            <article key={card._id} className="photo">
                <div className="photo__image-container">
                    <button className={cardDeleteButtonClassName} 
                    onClick={handleDeleteClick}
                    aria-label="Удалить" type="button"></button>
                    <img
                        className="photo__image photo__image_open"
                        src={card.link} alt={card.name}
                        name="name"
                        onClick={handleClick} />
                </div>
                <h3
                    className="photo__title"
                    name="link">{card.name}</h3>
                <div className="photo__like-container">
                    <button 
                    className={cardLikeButtonClassName} 
                    onClick={handleLikeClick}
                    type="button" aria-label="Нравится"></button>
                    <p className="photo__like-counter"></p>
                </div>
            </article>
        )
}

export default Card;