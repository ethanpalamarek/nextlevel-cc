import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/team">The Team</Link>
      </li>
      <li>
        <a href="https://www.instagram.com/manteocycling/">Instagram</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
