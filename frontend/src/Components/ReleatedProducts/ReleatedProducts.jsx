import React from 'react'
import './ReleatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const ReleatedProducts = () => {
  return (
    <div className="releatedProducts">
        <h1>Releated Products</h1>
        <hr />
        <div className="releatedProducts-item">
                {data_product.map((item,i)=>{
                    return <Item  key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
                })}
        </div>
    </div>
  )
}

export default ReleatedProducts