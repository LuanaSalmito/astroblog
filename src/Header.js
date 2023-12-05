// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Blog de Astronomia</h1>
      <nav>
        <ul>
        <li><Link to="/">Início</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/criar-post">Criar post</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
