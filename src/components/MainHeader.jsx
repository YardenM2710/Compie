import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export function MainHeader() {
  return (
    <header className="app-header">
      <section className="container">
        <h1 className="logo">Compie</h1>
        <nav>
          <Link to="/">
            <Button variant="text">Home</Button>
          </Link>
          <Link to="/contact">
            <Button variant="text"> Contacts</Button>
          </Link>
          {/* <Link to="/login">
            <Button onClick={onLogOut} variant="text">
              Logout
            </Button>
          </Link> */}
        </nav>
      </section>
    </header>
  );
}
