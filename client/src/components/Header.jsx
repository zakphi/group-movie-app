import React from 'react';

const Header = (props) => {
    return (
        <header>
            <div className="logo">Awesome Movie App</div>
            <nav>
                <li onClick={() => props.setPage('home')}>Home</li>
                <li onClick={() => props.setPage('movies')}>Movies</li>
                <li onClick={() => props.setPage('login')}>Log In</li>
                <li onClick={() => props.setPage('register')}>Register</li>
                <li onClick={() => props.setPage('user')}>User Dashboard</li>
            </nav>    
        </header>
    )
}

export default Header;