import {React} from 'react';
import { Row, Col, Container } from "react-bootstrap";
import { GiCrossedSwords, GiHealthPotion, GiHealingShield, GiLibertyWing, GiFlatPawPrint } from "react-icons/gi";
import { FaRuler, FaBalanceScale } from "react-icons/fa";

export default function Ministats(prop){
  const monster = prop.monster;
  const token = `../../${monster.token_img}`;
  const logMonster = () => {
    console.log(monster.token_img);
  }
  return (
    <Container className='d-lg-flex ministats'>
      <Col style={{alignContent: 'center'}}>
          <div className='poster'>
            <img src={token} alt={`a randomly selected/featured monster from dnd 5e`} />
          </div>
          <Row className="justify-content-center download">
            <button className="btn btn-secondary d-block" style={{maxWidth: 'fit-content'}}><i className='bi bi-download me-1' /> SVG Token Image</button>
            <button className="btn btn-secondary d-block" style={{maxWidth: 'fit-content'}}><i className='bi bi-download me-1' /> PNG Token Image</button>
          </Row>
      </Col>
      <Col style={{textAlign: 'start'}}>
        <h2>{monster.name}</h2>
        <img style={monster.legendary ? {display: 'block'} : {display: 'none'}} src={require('../../assets/legendary.svg').default} className='legendary' alt="legendary monster badge"/>
        <p><GiCrossedSwords className='me-2' /><span className='text-decoration-underline'>Challenge Rating</span>: {monster.cr === 0 ? 0 : monster.cr < 1 ? `1/${1/monster.cr}` : monster.cr}</p>
        <p><GiHealthPotion className='me-2' /><span className='text-decoration-underline'>HP</span>: {monster.hp}/{monster.hp}</p>
        <p><GiFlatPawPrint className='me-2' /><span className='text-decoration-underline'>Creature Type</span>: {monster.type}</p>
        <p><FaRuler className='me-2' /><span className='text-decoration-underline'>Size</span>: {monster.size}</p>
        <p><FaBalanceScale className='me-2' /><span className='text-decoration-underline'>Alignment</span>: {monster.alignment}</p>
        <p><GiHealingShield className='me-2' /><span className='text-decoration-underline'>Armor Class</span>: {monster.ac}</p>
        <p><GiLibertyWing className='me-2' /><span className='text-decoration-underline'>Special Movement</span>: {monster.special_speed}</p>
      </Col>
    </Container>
  )
}