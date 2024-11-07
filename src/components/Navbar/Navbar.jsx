import React from 'react'
import  './navbar.css'
import { CiForkAndKnife } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
      <CiForkAndKnife className='ci-1'/>
      <h1>Печка</h1>
      </div>
      <ul className='nav-menu'>
        <li>Пиица <hr/></li>
        <li>Вок</li>
        <li>Шаурма</li>
        <li>Закуски</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Войти</button>
        <FaShoppingCart className='fa-1'/>
      </div>
    </div>
  )
}
