import PropTypes from 'prop-types';

const Filter = ({ contacts, onChange }) => {
  return (
    <>
      <h3>Find Name</h3>
      <label htmlFor="" />
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Name"
        value={contacts.filter}
        onChange={onChange}
      />
    </>
  );
};

Filter.propTypes = {
  contacts: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
