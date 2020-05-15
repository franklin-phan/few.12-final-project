import React from 'react'

class PantryForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
      <h1>About the Virtual Pantry</h1>
      <p>Track your pantry's inventory with this app!</p>
    </div>
      );
    }
  }
  
  export default PantryForm