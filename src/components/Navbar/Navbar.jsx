import React, { useState } from 'react'
import './navbar.css'
import { CiForkAndKnife } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const [menu, setMenu] = useState('новинки');

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <CiForkAndKnife className='ci-1' />
        <h1>Печка</h1>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu('новинки') }}><Link style={{ textDecoration: 'none' }} to='/'>Новинки</Link>{menu === 'новинки' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('пицца') }}><Link style={{ textDecoration: 'none' }} to='/пицца'>Пиица</Link>{menu === 'пицца' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('вок') }}><Link style={{ textDecoration: 'none' }} to='/вок'>Вок</Link>{menu === 'вок' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('шаурма') }}><Link style={{ textDecoration: 'none' }} to='шаурма'>Шаурма</Link>{menu === 'шаурма' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('закуски') }}><Link style={{ textDecoration: 'none' }} to='закуски'>Закуски</Link>{menu === 'закуски' ? <hr /> : <></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Войти</button></Link>
        <Link to='/cart'><FaShoppingCart className='fa-1' /></Link>
      </div>
    </div>
  )
}
