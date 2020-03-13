import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import '../styles/navbar.css'

const Header = () => {
  return (
    <Container>
      <div className='ui vertical fluid menu'>
        <NavLink to="/" className="Nav_link" activeClassName="activeRoute" activeStyle={{ color: 'blue' }} > Home{'  '} </NavLink>
        <NavLink to="/create" className="Nav_link" activeClassName="activeRoute" activeStyle={{ color: 'blue' }} > AddBook{'  '} </NavLink>
      </div>
    </Container>
  )
};

export default Header;