import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => (
  <div className={styles.ClassList}>
    <h3 className={styles.ClassList__title}>Contact List</h3>
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={styles.ClassList__item}>
            <p className={styles.ClassList__name}>{contact.name}</p>
            <p className={styles.ClassList__phone}>{contact.number}</p>
          </li>
        );
      })}
    </ul>
  </div>
);

/*
ClassList
ClassList__title
ClassList__item
ClassList__description
ClassList__value

*/

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.string,
    }),
  ).isRequired,
};

export default ContactList;
