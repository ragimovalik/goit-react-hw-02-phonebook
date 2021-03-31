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
      { id: 'id-12345', name: 'Daniel Defoe', number: '9876541210' },
      { id: 'id-54321', name: 'Jonathan Swift', number: '9876542210' },
      { id: 'id-98765', name: 'Robert Stevenson', number: '9876543210' },
    ],
    filter: '',
  };

  contactsChecker = name => {
    const { contacts } = this.state;

    return contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase()),
    );
  };

  formSubmitHandler = ({ name, number }) => {
    const idSetter = `id-${Math.ceil(Math.random() * 100000)}`;
    const newContact = { id: idSetter, name, number };

    this.contactsChecker(name)
      ? alert(`${name} is already in contacts`)
      : this.setState(contacts => ({
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
    const normalizedText = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedText),
    );
  };

  deleteHandler = id => {
    // const { contacts } = this.state;
    console.log(id);

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  /*
  this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
*/

  render() {
    return (
      <>
        <PageTitle title={'HomeWork #2-Phonebook of React'} />
        <Form onSubmitData={this.formSubmitHandler} />
        <Filter contacts={this.state.filter} onChange={this.filterHandler} />
        <ContactList
          contacts={this.filteredContacts()}
          onClick={this.deleteHandler}
        />
      </>
    );
  }
}

export default App;
