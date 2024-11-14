import React from 'react'
import './card.css'

export default function Card(props) {
  return (
    <div className='card'>
      <img src={props.image} alt=''/>
      <p>{props.name}</p>
      <div className='card-prices'>
      <div className='card-prices-new'>{props.new_price}</div>
      <div className='card-prices-old'>{props.old_price}</div>
      </div>
    </div>
  )
}
