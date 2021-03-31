import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ contacts, onChange }) => {
  return (
    <div className={styles.Filter__wrap}>
      <h3 className={styles.Filter__title}>Search</h3>
      <div className={styles['Form__input-wrap']}>
        <label className={styles.Form__label} htmlFor="filter">
          Find Name
        </label>
        <input
          className={styles.Form__input}
          type="text"
          id="filter"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Name"
          value={contacts.filter}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

Filter.propTypes = {
  contacts: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
