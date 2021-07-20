import React from 'react';

function ImagePopup() {
    return (
        <>
            <div class="popup popup_full_photo">
                <div class="popup__figure-flex">
                    <button class="button-close popup__close popup__close_btn_close popup__button-close" type="button"></button>
                    <figure class="popup__container popup__container-image popup__container-image_open">
                        <img class="popup__image" src="#" alt="#" />
                        <figcaption class="popup__caption"></figcaption>
                    </figure>
                </div>
            </div>
        </>
        )
}

export default ImagePopup