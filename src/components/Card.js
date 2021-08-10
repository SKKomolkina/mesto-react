import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
    const { card, onCardClick } = props;
    
    const currentUser = React.useContext(CurrentUserContext);

    function handleClick() {
        onCardClick(card);
        console.log(card);
    }

    //сверяем айди карточки 
    const isOwn = card.owner._id === currentUser._id;

    //класс, позволяющий при совпадении _.id удалить карточку
    const cardDeleteButtonClassName = (
        `photo__trash ${isOwn ? 'photo__trash' : '' }`
    );

    const isLiked = card.likes.some(i => i._id === currentUser._id);

    const cardLikeButtonClassName = `photo__like ${isLiked ? 'photo__like_active' : ''}`

        return (
            <article key={card._id} className="photo">
                <div className="photo__image-container">
                    <button className={cardDeleteButtonClassName} aria-label="Удалить" type="button"></button>
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
                    <button className={cardLikeButtonClassName} type="button" aria-label="Нравится"></button>
                    <p className="photo__like-counter"></p>
                </div>
            </article>
        )
}

export default Card;