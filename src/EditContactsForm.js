import React, { Component } from 'react';

class EditContactsForm extends Component {
  state = {
    name: this.props.contact.name || '',
    phoneNumber: this.props.contact.phoneNumber || '',
    location: this.props.contact.location || '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, phoneNumber, location } = this.state;
    const updatedContact = { ...this.props.contact, name, phoneNumber, location };
    this.props.onEditContact(updatedContact);
    console.log(updatedContact); // Log the updated contact information
  };

  render() {
    const { name, phoneNumber, location } = this.state;
    const { onCloseModal } = this.props;

    return (
      <div className="modal">
        <div className="modal-content">
          <h2>Edit Contact:</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Phone Number:
              <input
                type="number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={location}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <button type="submit">Save</button>
            <button type="button" onClick={onCloseModal}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditContactsForm;
