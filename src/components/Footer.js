import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function Footer() {
  return (
    <Container className="footer">
      <Row className="color-2">
        <Col>
          <p>Created 2024 using <a href="https://www.dnd5eapi.co/" className="color-3" style={{textDecoration: 'none'}}>D&D 5e API</a></p>
        </Col>
      </Row>
    </Container>
  );
}