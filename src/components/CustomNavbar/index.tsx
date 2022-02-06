import React from 'react';
import { Navbar, NavDropdown, FormControl, Button, Form, Nav, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./index.module.scss";
import * as constants from '../../constants';

const CustomNavbar = () => {
    const WHO_WE_ARE = "Who We Are";
    const HOW_IT_WORKS = "How It Works";
    const STAY_TUNED = "Stay Tuned"

    const scrollToView = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.preventDefault();
      let element:HTMLElement = document.getElementById("who-we-are")!;

      if((e.target as Element).innerHTML === WHO_WE_ARE) {
        element = document.getElementById("who-we-are")!;
      }
      else if((e.target as Element).innerHTML === HOW_IT_WORKS) {
        element = document.getElementById("how-it-works")!;
      }
      else if ((e.target as Element).innerHTML === STAY_TUNED){
        element = document.getElementById("stay-tuned-submit")!;
      }

      window.scroll({top: element.offsetTop - 56, behavior: "smooth"})
    };

    return (
        <Navbar className={styles.NavBar} collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <img className={styles.LogoImage} src="Logo.png" alt="card" />
          <Navbar.Brand href="/">{constants.COMPANY_NAME}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className={styles.NavItem} href="/">Home</Nav.Link>
              <Nav.Link className={styles.NavItem} onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => scrollToView(e)}>Who We Are</Nav.Link>
              <Nav.Link className={styles.NavItem} onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => scrollToView(e)}>How It Works</Nav.Link>
              <Nav.Link className={styles.NavItem} onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => scrollToView(e)}>Stay Tuned</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;