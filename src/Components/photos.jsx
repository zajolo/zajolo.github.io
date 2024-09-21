import Villain from './villains.js';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Success from './success.jsx';
import { useState } from 'react';

function Photos (props){
    const [photo, setPhoto] = useState(0);
    const addPic = (photo) =>{
        event.preventDefault()
        props.onDataChange(photo)
        setPhoto(photo);
    }

    return(
        <Container>
            <Row>
                <Col style={{
            display: 'flex',
            justifyContent: 'center'
            }}>
                    <img src={Villain[photo].image} width="100"/>
                </Col>
            </Row>
            <br/>
            <Row>
                <Success photo = {photo} onDataChange={addPic}/>
            </Row>
            <Row>

            </Row>
        </Container>
    );
}

export default Photos;