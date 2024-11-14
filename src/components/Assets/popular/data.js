import shawarma from './Шаурма.avif';

import surprise from './surprise.png';
import peperoni from './Пицца.jpg';
import vokShrimps from './Вок.jpeg';

let data_popular = [
    {
        id: 1,
        name: 'Шаурма домашняя',
        image: shawarma,
        new_price: 250,
        old_price: 199,
    },
    {
        id: 2,
        name: 'Бокс-сюрприз',
        image: surprise,
        new_price: 889,
        old_price: 659,
    },
    {
        id: 3,
        name: 'Пицца Пеперони',
        image: peperoni,
        new_price: 499,
        old_price: 359,
    },
    {
        id: 4,
        name: 'Вок с креветками',
        image: vokShrimps,
        new_price: 350,
        old_price: 299,
    },
]

export default data_popular