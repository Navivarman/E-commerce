import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="items">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item_prices">
        <div className="new_price">
          <p>${props.new_price}</p>
        </div>
        <div className="old_price">
          <p>${props.old_price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
