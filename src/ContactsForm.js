import React, { Component } from 'react';
import './style.css';

class ContactsForm extends Component {
  state = {
    name: '',
    phoneNumber: '',
    location: '',
    image: ''
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, phoneNumber, location, image } = this.state;
    const newContact = { name, phoneNumber, location, image };
    this.props.onAddContact(newContact);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      phoneNumber: '',
      location: '',
      image: ''
    });
  };

  render() {
    const { name, phoneNumber, location, image } = this.state;

    return (
      <div className='add-contacts'>
        <h2>Add Contact:</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              type='Number'
              name='phoneNumber'
              value={phoneNumber}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Location:
            <input
              type='text'
              name='location'
              value={location}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Image URL:
            <input
              type='text'
              name='image'
              value={image}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

export default ContactsForm;
