import {React, useState} from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function Generator() {
  const [monsters, setMonsters] = useState([]);

  const getMonsters = async () => {
    let response = await fetch('https://www.dnd5eapi.co/api/monsters');
    let data = await response.json();
    return data.results;
  };

  const randomizedMonster = (arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  const filtered = async (arr) => {
    let filteredMonsters = []
    await arr.forEach(monster => {
      fetch(`https://www.dnd5eapi.co/api/monsters/${monster.index}`).then((response) => response.json()).then((data) => {
        if (data.alignment === 'lawful evil' && !filteredMonsters.includes(data)) {
          filteredMonsters.push(data);
        }
      });
    });
    return filteredMonsters;
  }

  const monsterFetch = async () => {
    let monsterList = await getMonsters();
    let randomMonster = randomizedMonster(monsterList);
    const filteredList = filtered(monsterList);
    console.log(filteredList);
    // let response = await fetch(`https://www.dnd5eapi.co/api/monsters/${randomMonster.index}`).then((response) => response.json()).then((data) => console.log(data));
  };

  return (
    <Container className="page">
      <Row>
        <Col>
          <h1>Generator</h1>
          <button onClick={monsterFetch}>Fetch</button>
        </Col>
      </Row>
    </Container>
  );
};