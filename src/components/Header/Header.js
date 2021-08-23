import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';

function Header(props) {
    return (
        <header className='header'>
            <div className="header__container">
                <nav className='header__nav'>
                    <Link to='/' className='header__logo'></Link>
                    <Link className='header__link' to='/home'>Home</Link>
                    <Link className='header__link' to='/feature'>Feature</Link>
                    <Link className='header__link' to='/pricing'>Priceing</Link>
                    <Link className='header__link' to='/solution'>Solution</Link>
                    <Link className='header__link' to='/faq'>Faq</Link>
                </nav>
                <div className='header__auth'>
                    <Link className='header__link' to='/home'>Sign in</Link>
                    <button className='header__button' type='button'>Download</button>
                </div>
                <Link to='/' className='header__logo-mobile'></Link>
                <button className='header__burger-menu' type="button"></button>
            </div>


        </header>
    )
}
export default Header;