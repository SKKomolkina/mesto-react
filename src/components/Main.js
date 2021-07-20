import React from 'react';

function Main() {
    function handleEditAvatarClick() {
        document.querySelector('.popup-avatar').classList.add('popup_opened');
    };

    function handleEditProfileClick() {
        document.querySelector('.popup-profile').classList.add('popup_opened');
    };

    function handleAddPlaceClick() {
        document.querySelector('.popup-photo').classList.add('popup_opened');
    }

    return (
        <main>
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__photo-wrapper" onClick={handleEditAvatarClick}>
                        <img name="avatar" src="<%=require('./images/avatar.jpg')%>" alt="Ваше фото" className="profile__photo" />
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button className="profile__btn-edit" type="button" value="" onClick={handleEditProfileClick}></button>
                        <p className="profile__about">Исследователь океана</p>
                    </div>
                    <button className="profile__btn-add" type="button" onClick={handleAddPlaceClick}></button>
                </div>
            </section>

            <section className="photos">
            </section>
        </main>
    )
}

export default Main