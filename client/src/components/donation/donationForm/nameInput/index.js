import classes from './NameInput.css';

const NameInput = () => (
  <fieldset className={classes.NameInputWrapper}>
    <label htmlFor='name-input'>Name</label>
    <input
      className={classes.NameInput}
      type='text'
      id='name-input'
      placeholder='Enter your name'
    />
    <a href='/'>Click here to donate on behalf of someone else</a>
  </fieldset>
);

export default NameInput;