import './SelectAmount.css';

const SelectAmount = () => {
  return (
    <div className='SelectAmount'>
      <header className='Title'>
        <h4 className='title-select'>Select Amount (in US dollars)</h4>
      </header>
      <fieldset className='Amounts'>
        {/* <div className='RadioWrapper'>
          <input
            defaultChecked
            className='Radio'
            type='radio'
            name='amount'
            id='20'
          />
          <label htmlFor='20'>$20</label>
        </div> */}
        <div className='RadioWrapper'>
          <input className='Radio' type='radio' name='amount' id='20' />
          <label htmlFor='20'>$20</label>
        </div>
        <div className='RadioWrapper'>
          <input className='Radio' type='radio' name='amount' id='50' />
          <label htmlFor='50'>$50</label>
        </div>
        <div className='RadioWrapper'>
          <input className='Radio' type='radio' name='amount' id='75' />
          <label htmlFor='75'>$75</label>
        </div>
        <div className='RadioWrapper'>
          <input className='Radio' type='radio' name='amount' id='100' />
          <label htmlFor='100'>$100</label>
        </div>
        <div className='RadioWrapper'>
          <input
            className='Radio'
            type='radio'
            name='amount'
            id='other'
          />
          <label htmlFor='other'>Other</label>
        </div>
      </fieldset>
    </div>
  );
};

export default SelectAmount;