import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div className='header'>
            <div className="header_container">
                <div className="header_logo">
                    <img className='header_logo_flipkart' src='https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt=''/>
                    <a href='/'>Explore <span>Plus</span></a>
                </div>
                <div className="header_searchBox">
                    <input className='header_searchBox_input' type="text"/>
                    <SearchIcon className='header_searchBox_icon'/>
                </div>
                <div className="header_login">
                    Login
                </div>
                <div className="header_more">
                    More
                </div>
                <div className="header_cart">
                    <ShoppingCartIcon />
                    Cart
                </div>
            </div>
        </div>
    )
}

export default Header
