import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

/*import React, { Component } from "react";

class Radios extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    alert('The answer you entered was: ${this.selectedOption}')
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="A"
              checked={this.state.selectedOption === "A"}
              onChange={this.onValueChange}
            />
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="B"
              checked={this.state.selectedOption === "B"}
              onChange={this.onValueChange}
            />
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="C"
              checked={this.state.selectedOption === "C"}
              onChange={this.onValueChange}
            />
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="D"
              checked={this.state.selectedOption === "D"}
              onChange={this.onValueChange}
            />
          </label>
        </div>
        <Button type="submit">
          Submit
        </Button>
      </form>
    );
  }
}*/
function Radios(props) {
    const handleChoice = (event) => {
        props.onDataChange(event.target.value)
        setselected(event.target.value)
    }
    const [selected, setselected] = useState('');
    /*const handleSubmit = (event) => {
        setChoices(event.target.value)
        event.prevenDefault()
        setForm({
            choices: '',
        });
    }*/
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