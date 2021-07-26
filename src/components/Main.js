import React from 'react';
import { api } from './../utils/Api';
import Card from './Card.js';

function Main(props) {
    const { onEditAvatar, onEditProfile, onAddPlace, onCardClick } = props;

    const [userName, setUserName] = React.useState([]);
    const [userDescription, setUserDescription] = React.useState([]);
    const [userAvatar, setUserAvatar] = React.useState([]);

    const [cards, setCards] = React.useState([]);


    React.useEffect(() => {
        api.getUserData()
            .then((card) => {
                setUserName(card.name);
                setUserDescription(card.about);
                setUserAvatar(card.avatar);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

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
                            src={userAvatar}
                            alt="Ваше фото" className="profile__photo" />
                    </div>

                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__btn-edit" type="button" value="" onClick={onEditProfile}></button>
                        <p className="profile__about">{userDescription}</p>
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