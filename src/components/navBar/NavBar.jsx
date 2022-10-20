import React from 'react'

import Logo from '../../asset/logo.svg';
import avatar from '../../asset/avatar.svg';


import './NavBar.css'
const NavBar = () => {
    return (
        <div className='nav'>
            <div className='nav-img col-2'>
                <span className="material-symbols-outlined nav-img__img" height="25" >
                    menu
                </span>
                {/* <img src={menuIcon} alt="menu" height="25" /> */}
                <img src={Logo} alt="logo" height="30" className='nav-img__icon' />
            </div>
            <div className='nav-search col-6'>
                <input type="text" placeholder='Search' className='nav-search__input' />
                <button type="submit" className='nav-search__button'><span className="material-symbols-outlined nav-search__button-icon" >
                    search
                </span></button>
            </div>
            <div className='nav-avatar col-2'>
                <img src={avatar} alt="avatar" height="40" className='nav-avatar--img' />
            </div>
        </div>

    )
}

export default NavBar