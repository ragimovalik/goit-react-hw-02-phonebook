import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  state = { name: '', number: '' };

  setDefaultState = () =>
    this.setState({
      name: '',
      number: '',
    });

  onChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(
      `Signed up as: ${this.state.name}, phonenumber is ${this.state.number}`,
    );

    this.props.onSubmitData(this.state);

    this.setDefaultState();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Name"
            required
            onChange={this.onChange}
            value={this.state.name}
          />
        </label>{' '}
        Phonenumber
        <label htmlFor="number">
          <input
            type="tel"
            name="number"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            placeholder="Phone Number"
            required
            onChange={this.onChange}
            value={this.state.number}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};

export default Form;

/*

*/
