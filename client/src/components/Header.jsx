import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <div className="logo">Awesome Movie App</div>
            <nav>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/movies'>Movies</Link></li>
              <li><Link to='/login'>Log In</Link></li>
              <li><Link to='/register'>Register</Link></li>
              <li>User Dashboard</li>
              <li onClick={props.logOut}><Link to='/'>Log Out</Link></li>
            </nav>
        </header>
    )
}

export default Header;
