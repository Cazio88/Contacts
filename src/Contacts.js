import React, { Component } from 'react';

class Contacts extends Component {
  handleDelete = (index) => {
    this.props.onDeleteContact(index);
  };

  handleEdit = (contact) => {
    this.props.onEditButtonClick(contact);
  };

  render() {
    const { contacts } = this.props;

    return (
        <>
        <h2 className='add-contacts'>Contacts:</h2>
        <div className='container-2'>
        {contacts.map((contact, index) => (
          <div key={index} className='contact'>
            <div className='contact-info'>
              <div className='contact-image'>
                <img src={contact.image} alt='Contact' />
              </div>
              <div className='contact-details'>
                <p>
                  <strong>Name:</strong> {contact.name}
                </p>
                <p>
                  <strong>Phone Number:</strong> {contact.phoneNumber}
                </p>
                <p>
                  <strong>Location:</strong> {contact.location}
                </p>
              </div>
            </div>
            <div className='contact-actions'>
              <button onClick={() => this.handleEdit(contact)}>Edit</button>
              <button onClick={() => this.handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      </>
    );
  }
}

export default Contacts;
