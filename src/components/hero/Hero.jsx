import React from 'react'
import './hero.css'
import HeroImg from '../Assets/hero.png'
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Hero() {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>Вкусно, быстро, с любовью!</h2>
                <div >
                    <p>
                        Новый уровень наслаждения! Пицца с креветками, помидорами и зеленью — это не просто еда, это праздник для ваших вкусовых рецепторов!
                    </p>
                    <div className='hero-arrow-btn'>
                    <p>
                        Найди свой любимы вкус!
                    </p>
                    <IoIosArrowDroprightCircle />
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <div>
                    <img src={HeroImg} alt='' />
                </div>
            </div>
        </div>
    )
}
