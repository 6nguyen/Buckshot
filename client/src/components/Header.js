import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Buckshot
          </a>
          <ul id="nav-mobile" className="right">
            <li>Login with Google</li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
