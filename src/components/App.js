import React from 'react';
// import { Route } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import AvatarPopup from './AvatarPopup';
import ProfilePopup from './ProfilePopup';
import PlacePopup from './PlacePopup';

import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
    const [currentUser, setCurrentUser] = React.useState('');

    const user = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        api.getUserData()
            .then((data) => {
                setCurrentUser(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

    const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    };

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    };

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    };

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);

        setSelectedCard({ name: '', link: '' });
    }

    function handleCardClick(selectedCard) {
        setSelectedCard({ name: selectedCard.name, link: selectedCard.link });
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="root">
                <Header />

                <Main
                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}

                    onCardClick={handleCardClick}
                />

                <AvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                />

                <ProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                />

                <PlacePopup
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                />

                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
                />

                <Footer />

                {/* POPUP_DELETE-CARD */}
                {/* <div className="popup popup-delete">
                <button className="button-close popup__cross popup__cross_btn_close-photo popup__button-close"
                    type="button"></button>
                <form className="popup__form popup__form_delete" name="delete-form">

                </form>
            </div> */}



            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
