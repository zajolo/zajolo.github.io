import React, { useState } from "react";
import quiz from "./quiz.json";
import Radios from "./radios.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import _ from 'lodash';

function test(props) {
  const [stateVariable, setStateVariable] = useState('');
  const [error, setError] = useState(true);
  const handleDataChange = (stateVariable) =>{
    console.log({stateVariable});
    thisChoice = _.isEqual(answerKey, stateVariable)
    console.log(thisChoice);
  }
  const handleSubmit = (stateVariable) =>{
    event.preventDefault();
    props.onDataChange(thisChoice)
    if(thisChoice != null){
      setError(false);
      setStateVariable({stateVariable});
    }
    else{
      setError(true);
    }
    setError(true);
    console.log({stateVariable});
  }

    var keys = Object.keys(quiz);
    var randomKey = keys[Math.floor(keys.length*Math.random())];
    var randQuest = quiz[randomKey];
    var answerKey = randQuest.key;
    var thisChoice = null;
    var helper = 'Please click an option.'

    return (
          <Container>
            <Row>
              {randQuest.question}
            </Row>
            <Row><br/></Row>
            <Row>
              <Col xs="1">
                <Radios stateVariable ={stateVariable} onDataChange={handleDataChange}/>
              </Col>
              <Col>
                <div>{" "+randQuest.choices[0]}</div>   
                <div>{" "+randQuest.choices[1]}</div>       
                <div>{" "+randQuest.choices[2]}</div>
                <div>{" "+randQuest.choices[3]}</div>
              </Col>
            </Row>
            <Row><br/></Row>
            <Row>{helper}</Row>
            <Row><br/></Row>
            <Row>
              <Button onClick={handleSubmit}>Submit</Button>
            </Row>
          </Container>
    );
  
}

export default test;