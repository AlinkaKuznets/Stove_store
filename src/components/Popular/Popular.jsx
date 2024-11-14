import React from 'react'
import './popular.css'
import data_popular_product from '../Assets/popular/data';
import Card from '../Assets/card/Card';

export default function Popular() {
  return (
    <div className='popular'>
        <h1>Заказывают прямо сейчас!</h1><hr/>
        <div className='popular-item'>
            {data_popular_product.map((item)=>{
                return <Card key={item.id} id={item.id} name={item.name} image={item.image}
                new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
