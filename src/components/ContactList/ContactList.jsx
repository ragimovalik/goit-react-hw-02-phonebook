import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => (
  <div>
    <h3>ContactList</h3>
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>
              Name: {contact.name}
              <span>Phone number: {contact.number}</span>
            </p>
          </li>
        );
      })}
    </ul>
  </div>
);

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
