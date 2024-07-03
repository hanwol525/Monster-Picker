import {React, useState, useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import Ministats from "./Ministats";

export default function Generator() {
  const api = 'http://localhost:9000'
  const [data, setData] = useState(null);
  const [monster, setMonster] = useState(null);

  const getMonsters = () => { 
    fetch(api+"/monsters")
      .then(res => res.json())
      .then(data => {setData(data); setMonster(data[Math.floor(Math.random() * data.length)])})
  }

  const randomMonster = () => {
    getMonsters();
    if (data) {
      console.log('hello')
    } else {
      console.log('no data')
    }
  }

  useEffect(() => {
    getMonsters();
  }, []);

  const logData = () => {
    console.log(monster);
  }

  return (
    <Container className="page" style={{ margin: 'auto'}} >
        <div className="feature-card">
          <h1 className="text-decoration-underline card-head">Featured Creature</h1>
          <Ministats />
          <Row className="justify-content-center"><button className="btn btn-secondary d-block mb-4" onClick={logData} style={{maxWidth: 'fit-content'}}>Fetch New</button></Row>
        </div>
    </Container>
  );
};