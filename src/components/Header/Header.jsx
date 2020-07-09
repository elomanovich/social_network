import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => (
    <header className={s.header}>
        <img src="https://shmector.com/_ph/13/510962645.png" alt="logo"/>

        <div className={s.loginBlock}>
            {props.isAuth? props.login:
            <NavLink to={'/login'} >Login</NavLink>}
        </div>
    </header>
);

export default Header;
