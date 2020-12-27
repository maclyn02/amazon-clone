import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../StateProvider';

function Header() {

    const [{ basket, dispatch }] = useStateValue();

    return (
        <div className='header'>

            {/* Logo */}
            <Link to='/' className='header__logo'>
                <div>amazon</div>
            </Link>

            {/* Search */}
            <div className='header__searchForm'>
                <select value='All' className='header__searchSelect'>
                    <option value='All'>All</option>
                    <option value='Electronics'>Electronics</option>
                    <option value='Home'>Home</option>
                    <option value='Clothing'>Clothing</option>
                </select>
                <input type='text' className='header__searchInput' />
                <button className='header__searchButton'><SearchIcon /></button>
            </div>

            {/* Nav Links */}
            <div className="header__rightNav">
                <Link to='/login' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLine1'>Hello</span>
                        <span className='header__optionLine2'>Sign In</span>
                    </div>
                </Link>
                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLine1'>Returns</span>
                        <span className='header__optionLine2'>& Orders</span>
                    </div>
                </Link>
                {/* Basket */}
                <Link to='/checkout' className='header__link'>
                    <div className='header__basketOption'>
                        <span className='header__basketIcon'>
                            <ShoppingCartIcon />
                        </span>
                        <span className='header__OptionLine2 header__basketCount'>{basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
