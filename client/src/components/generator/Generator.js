import {React, useState, useEffect} from "react";
import { Row, Container } from "react-bootstrap";
import Ministats from "./Ministats";

export default function Generator() {
  const api = 'http://localhost:9000'
  const [data, setData] = useState(null);
  const [monster, setMonster] = useState(
    {
      name: "Ancient Red Dragon",
      cr: 24,
      type: "Dragon",
      size: "Gargantuan",
      ac: 22,
      hp: 546,
      alignment: "chaotic evil",
      legendary: true,
      special_speed: 'fly',
      token_img: "assets/tokens/dragons/ancient-red-dragon.svg"
    }
  );

  const getMonsters = () => { 
    fetch(api+"/monsters")
      .then(res => res.json())
      .then(data => setData(data));
  }

  const getRandomMonster = () => {
    setMonster(data[Math.floor(Math.random() * data.length)]);
  };

  useEffect(() => {
    getMonsters();
  }, []);

  return (
    <Container className="page" style={{ margin: 'auto'}} >
        <div className="feature-card">
          <h1 className="text-decoration-underline card-head">Featured Creature</h1>
          <Ministats monster={monster} />
          <Row className="justify-content-center"><button className="btn btn-secondary d-block mb-4" onClick={getRandomMonster} style={{maxWidth: 'fit-content'}}>Fetch New</button></Row>
        </div>
    </Container>
  );
};