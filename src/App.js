import React, { Component } from 'react';
import Contacts from './Contacts';
import ContactsForm from './ContactsForm';
import EditContactsForm from './EditContactsForm';
import './style.css';

class App extends Component {
  state = {
    contacts: [
      {
        name: 'Francis Mensah',
        phoneNumber: '0554677399',
        location: 'Weija',
        image: 'https://www.mckinsey.com/~/media/mckinsey/careers%20redesign/meet%20our%20people/profiles/yetunde/yetunde_1132x1224.jpg?mw=1536&car=48:59&cpx=Left&cpy=Top'
      },
      {
        name: 'Daniel Asare',
        phoneNumber: '0267488849',
        location: 'Kasoa',
        image: 'https://www.mckinsey.com/~/media/mckinsey/careers%20redesign/meet%20our%20people/profiles/yetunde/yetunde_1132x1224.jpg?mw=1536&car=48:59&cpx=Left&cpy=Top' // Replace with a valid image URL
      },
      {
        name: 'Janelle Yeboah',
        phoneNumber: '0543387263',
        location: 'Mallam',
        image: 'https://www.mckinsey.com/~/media/mckinsey/careers%20redesign/meet%20our%20people/profiles/yetunde/yetunde_1132x1224.jpg?mw=1536&car=48:59&cpx=Left&cpy=Top'
      }
    ],
    contactToEdit: null,
    isEditModalOpen: false
  };

  handleAddContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]
    }));
  };

  handleDeleteContact = (contactIndex) => {
    this.setState((prevState) => {
      const updatedContacts = [...prevState.contacts];
      updatedContacts.splice(contactIndex, 1);
      return {
        contacts: updatedContacts
      };
    });
  };

  handleEditButtonClick = (contact) => {
    this.setState({
      contactToEdit: contact,
      isEditModalOpen: true,
    });
  };

  handleEditModalClose = () => {
    this.setState({
      contactToEdit: null,
      isEditModalOpen: false,
    });
  };

  handleEditContact = (updatedContact) => {
    const { contacts, contactToEdit } = this.state;
    const updatedContacts = contacts.map((contact) =>
      contact === contactToEdit ? updatedContact : contact
    );
    this.setState({
      contacts: updatedContacts,
      contactToEdit: null,
      isEditModalOpen: false
    });
  };

  render() {
    const { contacts, contactToEdit, isEditModalOpen } = this.state;

    return (
      <div>
        <h1 className='heading'>Contacts App</h1>
        <div className='container-1'>
          <ContactsForm onAddContact={this.handleAddContact} />
          <Contacts
            contacts={contacts}
            onDeleteContact={this.handleDeleteContact}
            onEditButtonClick={this.handleEditButtonClick}
          />
          {isEditModalOpen && (
            <EditContactsForm
              contact={contactToEdit}
              onEditContact={this.handleEditContact}
              onCloseModal={this.handleEditModalClose}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
