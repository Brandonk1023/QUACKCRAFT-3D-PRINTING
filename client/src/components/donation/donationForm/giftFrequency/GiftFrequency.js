import './GiftFrequency.css';

const GiftFrequency = () => {
  return (
    <div className='GiftFrequency'>
      <header className='Title'>
        <h4 className='title-name'>Select Gift frequency</h4>
      </header>
      <fieldset className='Frequency'>
        <div className='RadioWrapper'>
          <input
            className='Radio'
            id='monthly'
            type='radio'
            name='Frequency'
            defaultChecked
          />
          <label htmlFor='monthly'>Monthly</label>
        </div>
        <div className='RadioWrapper'>
          <input
            className='Radio'
            type='radio'
            id='one-time'
            name='Frequency'
          />
          <label htmlFor='one-time'>One time</label>
        </div>
      </fieldset>
    </div>
  );
};

export default GiftFrequency;