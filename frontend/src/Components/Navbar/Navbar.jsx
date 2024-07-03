import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icons from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const [menu,setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)
  return (
  <div className="navbar">
    <div className="navbar-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
    </div>
    <ul className="menu">
        <li onClick={() => {setMenu("shop")}}><Link to='/' style={{textDecoration: 'none',color: '#626262'}}>Shop </Link>{(menu === "shop")?<hr/>:<></> } </li>
        <li onClick={() => {setMenu("mens")}}><Link to='/men'style={{textDecoration: 'none',color: '#626262'}}>Men</Link> {(menu === "mens")?<hr/>:<></> }</li>
        <li onClick={() => {setMenu("womens")}}><Link to='/women'style={{textDecoration: 'none',color: '#626262'}}>Women </Link>{(menu === "womens")?<hr/>:<></> }</li>
        <li onClick={() => {setMenu("kids")}}><Link to='/kids'style={{textDecoration: 'none',color: '#626262'}}>Kids </Link> {(menu === "kids")?<hr/>:<></> }</li>
    </ul>
    <div className="nav-login-cart">
        <Link to='/login'><button  onClick={() => {setMenu("Login")}}>Login {(menu === "Login")?<></>:<></> } </button></Link>
        <Link to='/cart'><img src={cart_icons}   alt=""  /></Link> 
    </div>
    <div className="nav-cart-count">{getTotalCartItems()}</div>
  </div>


  )
}

export default Navbar