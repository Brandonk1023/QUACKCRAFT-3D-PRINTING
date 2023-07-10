import './Agreement.css';

const Agreement = () => {
  
  return (
    <fieldset className='Agreement'>
      <input
        className='CheckBox'
        type='checkbox'
        id='agreement-checkbox'
      />
      <label htmlFor='agreement-checkbox'>
        Yes, I’ll generously add $10.00 each month to cover the transaction fees.
      </label>
    </fieldset>
  );
};

export default Agreement;