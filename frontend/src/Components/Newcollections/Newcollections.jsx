import React from 'react'
import './Newcollections.css'
import new_collections from '../Assets/new_collections'
import Item  from '../Item/Item'

const Newcollections = () => {
  return (
    <div className="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
            })}
        </div>
    </div>
  )
}

export default Newcollections