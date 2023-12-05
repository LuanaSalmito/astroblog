// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const main = '/AstroBlog/';

  return (
    <header>
      <h1>Blog de Astronomia</h1>
      <nav>
        <ul>
        <li><Link to={`${main}`}>Início</Link></li>
          <li><Link to={`${main}posts`}>Posts</Link></li>
          <li><Link to={`${main}sobre`}>Sobre</Link></li>
          <li><Link to={`${main}criar-post`}>Criar post</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
