import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
      <header>
          <div className="logo">Awesome Movie App</div>
          <nav>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/movies'>Movies</Link></li>
            {!props.userState ? <li><Link to='/register'>Register</Link></li> : ''}
            {!props.userState ? <li><Link to='/login'>Log In</Link></li> : ''}
            {props.userState ? <li>User Dashboard</li> : ''}
            {props.userState ? <li onClick={props.logOut}><Link to='/' replace>Log Out</Link></li> : ''}
          </nav>
      </header>
    )
  }

export default Header;
