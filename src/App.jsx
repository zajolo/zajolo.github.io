import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Modalpop from './Components/modalPop';
import Photos from './Components/photos.jsx';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import Wallpaper from './wallpaper.jpg';
import Modal from 'react-bootstrap/Modal';

const App = () => {
  const [pick, setPick] = useState(false);
  const [showOne, setShow1] = useState(true);
  const [showTwo, setShow2] = useState(false);
  const [showThree, setShow3] = useState(false);
  const [first,setFirst] = useState(0);
  const [sec,setSec] = useState(0);
  const [tre,setTre] = useState(0);

  const addPick = (pick) =>{
    console.log({pick});
      if(pick === true){
        setShow1(false)
        setShow2(false)
        setShow3(true);
        
      }
  }
  const Congrats = () =>{
    setShow1(false)
    setShow3(false)
    setShow2(true);
    
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
    <div>
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
            alignItems: 'center'
            }}>
            <br/>
            <div className="instructions">
              <h3>You're invited!</h3>
              <h5>Choose 3 villains you may want to be.</h5>
            </div>
            <div>
              <Photos photo1={first} onDataChange={addPhoto}/>
            </div>
            <br/>
            <div>
              <Photos photo2={sec} onDataChange={addPhoto2}/>
            </div>
            <br/>
            <div>
              <Photos photo3={tre} onDataChange={addPhoto3}/>
            </div>
            <div className="bottom">
                <Form action="https://formsubmit.co/veritas0415@gmail.com" method="POST">
                  <Row className="justify-content-me-center">
                    <Col md="auto">
                        <input className="input" type="text" placeholder="Enter Your First Name" name="name" required/>
                        <Button variant="warning" size="sm" type="submit">
                              Submit Choices
                        </Button>
                    </Col>
                  </Row>
                        <div style={{
                          visibility: 'hidden'
                          }}>
                                <input type="text" name="choice1" value={first} readOnly/>
                                <input type="text" name="choice2" value={sec} readOnly/>
                                <input type="text" name="choice3" value={tre} readOnly/>
                        </div>
                </Form>
            </div>
        </div> 
        <div style={{
            display: (showThree ? 'flex' : 'none'),
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
            }}>
            <Modal
              show={showThree}
              onHide={Congrats}
              backdrop="static"
              keyboard={false}
              centered
              className = "popup2"
            >
                <Modal.Header closeButton>
                  <Modal.Title>You're Invited!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p><strong>When:</strong><span className="bolding"> 19th of October 2024</span></p>
                  <p><strong>Where:</strong><span className="bolding"> 4550 Jiminey Loop</span></p>
                  <p><strong>Cocktail Hour:</strong><span className="bolding"> 17:00 est (5pm)</span></p>
                  <p><strong>Party Start:</strong><span className="bolding"> 19:00 est (7pm)</span></p>
                  <p><strong>Screenshot this or write it down.</strong></p>
                  <p><strong>You will pick the top 3 characters you would want to dress up as on the next page.</strong></p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="warning" onClick={Congrats}>Go to Picks</Button>
                </Modal.Footer>
            </Modal>
        </div>
    </div>
  )
}

export default App