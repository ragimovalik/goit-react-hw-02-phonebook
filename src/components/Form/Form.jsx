import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

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

    this.props.onSubmitData(this.state);

    this.setDefaultState();
  };

  render() {
    return (
      <form className={styles.Form} onSubmit={this.handleSubmit}>
        <div className={styles['Form__input-wrap']}>
          <label htmlFor="name" className={styles.Form__label}>
            Name:
          </label>
          <input
            className={styles.Form__input}
            type="text"
            id="name"
            name="name"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Name"
            required
            onChange={this.onChange}
            value={this.state.name}
          />
        </div>
        <div className={styles['Form__input-wrap']}>
          <label htmlFor="tel" className={styles.Form__label}>
            Phone number:
          </label>
          <input
            className={styles.Form__input}
            type="tel"
            id="tel"
            name="number"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            placeholder="Phone Number"
            required
            onChange={this.onChange}
            value={this.state.number}
          />
        </div>
        <button className={styles.Form__btn} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};

export default Form;
