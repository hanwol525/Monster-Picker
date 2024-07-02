import {React} from 'react';
import { Row, Col, Container } from "react-bootstrap";


export default function Ministats(){
  return (
    <Container className='d-lg-flex' style={{width: '70vw', margin: '50px'}}>
      <Col>
        <Row className='justify-content-center'>
          <img src={require('../../assets/tokens/dragons/adult-red-dragon.svg').default} style={{maxWidth: '240px'}} alt={`a randomly selected/featured monster from dnd 5e`} />
        </Row>
      </Col>
      <Col style={{textAlign: 'start'}}>
        <h1>monster monster monster monster monster</h1><p className='d-inline'>legendary y/n</p>
        <p>cr</p>
        <p>type</p>
        <p>size</p>
        <p>alignment</p>
        <p>ac</p>
        <p>special speeds</p>
      </Col>
    </Container>
  )
}