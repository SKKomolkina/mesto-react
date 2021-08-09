import React from 'react';
import { api } from './../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import Card from './Card.js';

function Main(props) {
    const { onEditAvatar, onEditProfile, onAddPlace, onCardClick } = props;

    const user = React.useContext(CurrentUserContext);

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getInitialCards()
            .then((cards) => {
                console.log(cards);
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <main>
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__photo-wrapper" onClick={onEditAvatar}>
                        <img name="avatar"
                            src={user.avatar}
                            alt="Ваше фото" className="profile__photo" />
                    </div>

                    <div className="profile__info">
                        <h1 className="profile__name">{user.name}</h1>
                        <button className="profile__btn-edit" type="button" value="" onClick={onEditProfile}></button>
                        <p className="profile__about">{user.about}</p>
                    </div>

                    <button className="profile__btn-add" type="button" onClick={onAddPlace}></button>
                </div>
            </section>

            <section className="photos">
                {cards.map(card => <Card
                    card={card}
                    key={card._id}
                    onCardClick={onCardClick} />)}
            </section>
        </main>
    )
}

export default Main