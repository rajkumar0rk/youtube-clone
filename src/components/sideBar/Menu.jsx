import React from 'react'
import './Menu.css'
const Menu = (props) => {
    return (
        <div className='menu'>

            <span className="material-symbols-outlined menu--items__img">
                {props.icon}
            </span>

            {/* <img src={props.icon} alt="icon" height="25"  /> */}
            <p className='menu--items__p'>{props.title}</p>
        </div>
    )
}

export default Menu