import React from "react";
import { Row, Col, } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Logo from '../assets/logo.svg';


export default function Header() {
  return (
      <Navbar expand="lg" className="header">
        <Container className="pt-4">
          <Navbar.Brand href="#home">
            <Row className="color-2">
              <Col>
                <img src={Logo} width="59" height="64" alt="React Bootstrap logo" />
              </Col>
              <Col>
                <h1 className="mt-1">D&D 5E Monster Selector</h1>
              </Col>
            </Row>  
          </Navbar.Brand>
          <Navbar.Toggle className="navbar-toggler" type="button" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end align-self-end'>
            <Nav>
              {/* <Nav.Link href="#home">Hello</Nav.Link> */}
              {/* About */}
              {/* Generate */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};