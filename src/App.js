import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import PageTitle from './components/PageTitle/PageTitle';
import Form from './components/Form/Form';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-12345', name: 'Daniel Defoe', number: 987654321987 },
      { id: 'id-54321', name: 'Jonathan Swift', number: 987654321987 },
      { id: 'id-98765', name: 'Robert Stevenson', number: 987654321987 },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const idSetter = `id-${Math.ceil(Math.random() * 100000)}`;
    const newContact = { id: idSetter, name, number };

    return this.setState(contacts => ({
      contacts: [...this.state.contacts, newContact],
    }));
  };

  filterHandler = ({ currentTarget }) => {
    this.setState({
      filter: currentTarget.value,
    });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedText = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedText),
    );
  };

  render() {
    return (
      <>
        <PageTitle title={'HomeWork #2-Phonebook of React'} />
        <Form onSubmitData={this.formSubmitHandler} />
        <Filter contacts={this.state.filter} onChange={this.filterHandler} />
        <ContactList contacts={this.filteredContacts()} />
      </>
    );
  }
}

export default App;

/*

*/
