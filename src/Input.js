import React, { Component } from "react";

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({name: event.target.value.toUpperCase()});
      }
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
      }
    render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name :</label>
        <input id="name" value={this.state.name} onChange={this.handleChange} type="text" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;