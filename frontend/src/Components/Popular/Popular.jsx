import React from 'react'
import data_product from '../Assets/data'
import Item  from '../Item/Item'
import './Popular.css'

const Popular = () => {
  return (
    <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular_item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
            })}
        </div>
    </div>
  )
}

export default Popular