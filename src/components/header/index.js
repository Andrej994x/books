import React from 'react';
import './styles.css';

export function Header() {
    return (
        <header className="header">
            <div className='header__wrapper'>
                <a className="header__logo" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                </a>

                <nav className="main-nav" aria-label="Main">
                    <ul className="main-nav__list">
                        <li className="main-nav__item">
                            <a href="#" className="main-nav__link">Books</a>
                        </li>
                        <li className="main-nav__item">
                            <a href="#" className="main-nav__link">About Us</a>
                        </li>
                        <li className="main-nav__item">
                            <a href="#" className="main-nav__link main-nav__link--btn">Join us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
