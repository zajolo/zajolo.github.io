import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Test from './test.jsx';

function Modalpop(props) {
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var count = 0;
  
  const addAnswer = (answer) =>{
    event.preventDefault();
      if(answer != null){
        if(answer === true){
          correct = correct + 1;
          console.log(correct);
        }
        count = count +1
        if(count === 4){
          if(correct >= 3){props.onDataChange(true)}
          else{props.onDataChange(false)}
          setShow(false);
        }
      }
  }
  var correct = 0;
  

  return (
    <>
      <Button variant="primary" size="lg" onClick={handleShow}>
        Begin Quiz
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {<Test answer ={answer} onDataChange={addAnswer}/>}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modalpop;