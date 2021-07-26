import React from 'react';

function DeletePopup(props) {
    const { name, title } = props;
    return (
        <>
            <h2 className={`"popup__title popup__title-${name}"`}>{title}</h2>
            <button 
            className={`"popup__button popup__save popup__save-${name}"`} 
            type="submit">Да</button>
        </>
    )
}

export default DeletePopup;