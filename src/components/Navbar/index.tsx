import React from 'react';
import { Link } from 'react-router-dom';

import { logo } from '../../utils/constants';
import { SearchBar } from '../';
import { NavbarCointainer } from './navbar.styled';

const Navbar = () => {
  return (
    <NavbarCointainer direction="row"
      alignItems="center"
      p={2}
      sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </NavbarCointainer>
  );
};

export default Navbar;
