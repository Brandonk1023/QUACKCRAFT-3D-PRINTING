import classes from './Agreement.css';

const Agreement = () => {
  return (
    <fieldset className={classes.Agreement}>
      <input
        className={classes.CheckBox}
        type='checkbox'
        id='agreement-checkbox'
      />
      <label htmlFor='agreement-checkbox'>
        Yes, I’ll generously add $1.05 each month to cover the transaction fees.
      </label>
    </fieldset>
  );
};

export default Agreement;