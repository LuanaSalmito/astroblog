
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/imgs/logo.svg';
import './assets/styles/header.css';


const Header = () => {
    const main = '/AstroBlog/';

    return (
        <header>
            <div class="nav-header">

                <img className='logo' src={logo} alt="logo" />
                <nav>
                    <ul>
                        <li><Link to={`${main}`}>Início</Link></li>
                        <li><Link to={`${main}posts`}>Posts</Link></li>
                        <li><Link to={`${main}sobre`}>Sobre</Link></li>
                        <li><Link to={`${main}criar-post`}>Criar post</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
