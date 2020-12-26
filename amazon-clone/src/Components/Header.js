import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className='header'>

            {/* Logo */}
            <Link to='/' className='header__logo'>
                <div >amazon</div>
            </Link>

            {/* Search */}
            <div className='header__searchForm'>
                <select value='All' className='header__searchSelect'>
                    <option value='All'>All</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </select>
                <input type='text' className='header__searchInput' />
                <button className='header__searchButton'><SearchIcon /></button>
            </div>

            {/* 3 Links */}

            {/* Basket icon */}

        </div>
    )
}

export default Header
