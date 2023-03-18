import React, { useState } from 'react'
import {  Link } from 'react-router-dom'
import './header.css'
import { paths } from '../componentData'



const Header = ({header}) => {
    const [selectItem, setSelectItem] = useState(0)
    return (
    <header className='bg-dark header'>
        <nav className='container header__nav'>
            <div className="header__logo ">
                <img src={header.Logo} alt="" />
            </div>
            <div className="header__navigation ">
                <ul className='header__list'>
                    {
                        header.navItems.map((item, id) => (
                            <li key={item} className={`header__list-item `}>
                                <Link to={paths[id].path} className={`${selectItem == paths[id].id ? 'active' : ''}`} onClick={() => setSelectItem(id)}>{item}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header