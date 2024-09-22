import 'bootstrap/dist/css/bootstrap.min.css';
import Modalpop from './Components/modalPop';
import Photos from './Components/photos.jsx';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

const App = () => {
  const [pick, setPick] = useState(false);
  const [showOne, setShow1] = useState(true);
  const [showTwo, setShow2] = useState(false);
  const [showThree, setShow3] = useState()false);
  const [first,setFirst] = useState(0);
  const [sec,setSec] = useState(0);
  const [tre,setTre] = useState(0);

  const addPick = (pick) =>{
    console.log({pick});
      if(pick === true){
        setShow1(false)
        setShow3(false)
        setShow2(true);
      }
  }
  const Congrats = () =>{
    setShow1(false)
    setShow2(false)
    setShow3(true);
  }
  const addPhoto= (first) =>{
      setFirst(first);
  }
  const addPhoto2= (sec) =>{
      setSec(sec);
  }
  const addPhoto3= (tre) =>{
      setTre(tre);
  }


  return(
    <Container>
        <div style={{
          display: (showOne ? 'flex' : 'none'),
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
          }}>
              <Modalpop answer ={pick} onDataChange={addPick}/>
        </div>
        <div style={{
            display: (showTwo ? 'list-item' : 'none'),
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
            }}>
            <br/>
            <Row>
              <Photos photo1={first} onDataChange={addPhoto}/>
            </Row>
            <br/>
            <Row>
              <Photos photo2={sec} onDataChange={addPhoto2}/>
            </Row>
            <br/>
            <Row>
              <Photos photo3={tre} onDataChange={addPhoto3}/>
            </Row>
            <br/>
            <Form action="https://formsubmit.co/veritas0415@gmail.com" method="POST">
              <Row>
                <Col>
                       <input type="text" placeholder="Your Name" name="name" required/>
                </Col>
              </Row>
              <div style={{
                  display: 'none'
                  }}>
              <Row>
                <Col></Col>
                  <Col>
                    <input type="text" name="choice1" value={first} readOnly/>
                  </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col>
                    <input type="text" name="choice2" value={sec} readOnly/>
                </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col>
                    <input type="text" name="choice3" value={tre} readOnly/>
                </Col>
              </Row>
              </div>
                    <Button variant="primary" size="sm" type="submit" onClick={Congrats}>
                      Submit Choices
                    </Button>
            </Form>
        </div> 
        <div style={{
            display: (showThree ? 'flex' : 'none'),
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
            }}>
            <h1>Congratulations, You're Invited!!</h1>
        </div>
    </Container>
  )
}

export default App