import React from 'react';

import * as auth from '../utils/mestoAuth.js';

function Register() {
    const [password, setPassword] = React.useState('');
    const [mail, setMail] = React.useState('');
    
    function handleChangePassword(evt) {
        setPassword(evt.target.value);
    }

    function handleChangeMail(evt) {
        setMail(evt.target.value);
    }
    
    function handleSubmit(evt) {
        evt.preventDefault();

        auth.register(password, mail).then((res) => {
            
        })
    }

    return (
        <div className="auth">
            <h2 className="auth__title">Регистрация</h2>

            <form className="auth__form">
                <input
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    onChange={handleChangeMail}
                />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="Пароль"
                    onChange={handleChangePassword}
                />

                <button
                    className="auth__button"
                    type="submit">
                    Зарегистрироваться
                </button>
            </form>

            <p className="auth__text"></p>
        </div>
    )
}

export default Register;