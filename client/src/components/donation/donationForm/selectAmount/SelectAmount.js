import classes from './SelectAmount.css';

const SelectAmount = () => {
  return (
    <div className={classes.SelectAmount}>
      <header className={classes.Title}>
        <h4>Selct amount (in US dollar)</h4>
      </header>
      <fieldset className={classes.Amounts}>
        <div className={classes.RadioWrapper}>
          <input
            defaultChecked
            className={classes.Radio}
            type='radio'
            name='amount'
            id='20'
          />
          <label htmlFor='20'>$20</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input className={classes.Radio} type='radio' name='amount' id='50' />
          <label htmlFor='50'>$50</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input className={classes.Radio} type='radio' name='amount' id='75' />
          <label htmlFor='75'>$75</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input className={classes.Radio} type='radio' name='amount' id='100' />
          <label htmlFor='100'>$100</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input
            className={classes.Radio}
            type='radio'
            name='amount'
            id='other'
          />
          <label htmlFor='other'>other</label>
        </div>
      </fieldset>
    </div>
  );
};

export default SelectAmount;