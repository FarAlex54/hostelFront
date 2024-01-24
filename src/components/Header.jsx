import { React, useState, useEffect } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Login} from '../cards/Login';

const Header = () => {
  const locale = 'en';
  const [today, setDate] = useState(new Date());
  useEffect(() => {
      const timer = setInterval(() => { 
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    }
  }, []);

  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric' });
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">{time}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#About">Об отеле</Nav.Link>
            <Nav.Link href="#Contacts">Контакты</Nav.Link>
            <Nav.Link href="#Gallery">Фотогалерея</Nav.Link>
            <Nav.Link href="#Restorant">Ресторан</Nav.Link>
            <Nav.Link href="#Feedback">Отзывы</Nav.Link> 
          </Nav>
          <Nav className="ms-auto align-items-center">
            <div className='text-light pe-3'>Краснодарский край, село Бжид, ул.Лазурная, 10</div>
            <Login/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header