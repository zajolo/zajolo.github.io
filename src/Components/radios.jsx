import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

function Radios(props) {
    const handleChoice = (event) => {
        props.onDataChange(event.target.value)
        setselected(event.target.value)
    }
    const [selected, setselected] = useState('');

    return(
        <div>
            <Form>
                <Form.Check required={true}>
                    <Form.Check.Input type="radio" id="custom1" isValid aria-label="radio 1" name="radio1" value="A" onChange={handleChoice}/>
                    <Form.Check.Input type="radio" id="custom2" isValid aria-label="radio 1" name="radio1" value="B" onChange={handleChoice}/>
                    <Form.Check.Input type="radio" id="custom3" isValid aria-label="radio 1" name="radio1" value="C" onChange={handleChoice}/>
                    <Form.Check.Input type="radio" id="custom4" isValid aria-label="radio 1" name="radio1" value="D" onChange={handleChoice}/>
                    <br />
                </Form.Check>
            </Form>
        </div>
        
    )
}

export default Radios;