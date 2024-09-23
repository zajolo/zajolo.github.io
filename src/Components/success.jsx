import Villain from './villains.js'
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import { useState } from 'react';

function Success(props) {
    const handleSelect = (num) =>{
        event.preventDefault()
        props.onDataChange(num);
      }

    return (
        <div>
            <Form.Select className="dropdown" aria-label="Default select example" size="sm" onChange={(e) => handleSelect(e.target.value)}>
                {Object.keys(Villain).map((key, i) => (
                    <option
                        key={i}
                        value={(key)}
                    >
                        {Villain[key].name}
                    </option>
                ))}
            </Form.Select>
        </div>
    );
  }
  
  export default Success;