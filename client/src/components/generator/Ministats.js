import {React} from 'react';
import { Row, Col, Container } from "react-bootstrap";


export default function Ministats(){
  return (
    <Container className='d-lg-flex ministats'>
      <Col style={{alignContent: 'center'}}>
          <div className='poster'>
            <img src={require('../../assets/tokens/celestials/couatl.svg').default} alt={`a randomly selected/featured monster from dnd 5e`} />
          </div>
          <Row className="justify-content-center download">
            <button className="btn btn-secondary d-block" style={{maxWidth: 'fit-content'}}>Download SVG</button>
            <button className="btn btn-secondary d-block" style={{maxWidth: 'fit-content'}}>Download PNG</button>
          </Row>
      </Col>
      <Col style={{textAlign: 'start'}}>
        <h2 className='card-subhead'>monster monster monster monster monster</h2><p className='d-inline card-body'>legendary y/n</p>
        <p className='card-body'>cr</p>
        <p className='card-body'>type</p>
        <p className='card-body'>size</p>
        <p className='card-body'>alignment</p>
        <p className='card-body'>ac</p>
        <p className='card-body'>special speeds</p>
      </Col>
    </Container>
  )
}